import "./ProductsList.css";
import ProductCard from "./ProductCard";
import useData from "../../hooks/useData";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductsList = () => {
	const [search, setSearch] = useSearchParams();
	const category = search.get("category");
	const page = search.get("page");

	const { data, error, isLoading } = useData(
		"/products",
		{
			params: {
				category,
				perPage: 10,
				page,
			},
		},
		[category, page]
	);

	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

	// Local accumulating state for infinite scrolling
	const [products, setProducts] = useState([]);
	const [totalPages, setTotalPages] = useState(0);

	const handlePageChange = () => {
		const currentParams = Object.fromEntries([...search]);
		const currentPage = Number(currentParams.page || "1");
		const nextPage = String(currentPage + 1);
		setSearch({ ...currentParams, page: nextPage });
	};

	// When category changes, reset and ensure page=1
	useEffect(() => {
		setProducts([]);
		setTotalPages(0);
		const currentParams = Object.fromEntries([...search]);
		if (!currentParams.page || currentParams.page === "0") {
			setSearch({ ...currentParams, page: "1" });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [category]);

	// When data fetch completes, append or replace
	useEffect(() => {
		if (!data) return;
		setTotalPages(Number(data.totalPages || 0));
		const currentPage = Number(page || "1");
		setProducts((prev) => {
			const incoming = data.products || [];
			if (currentPage <= 1) return incoming;
			const seen = new Set(prev.map((p) => p._id));
			const uniqueIncoming = incoming.filter((p) => !seen.has(p._id));
			return [...prev, ...uniqueIncoming];
		});
	}, [data, page]);

	// Infinite scroll listener
	useEffect(() => {
		const onScroll = () => {
			if (isLoading) return;
			const currentPage = Number(page || "1");
			if (totalPages && currentPage >= totalPages) return; // no more pages
			const { scrollTop, clientHeight, scrollHeight } =
				document.documentElement;
			const nearBottom = scrollTop + clientHeight >= scrollHeight - 300;
			if (nearBottom) {
				handlePageChange();
			}
		};
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, [isLoading, page, totalPages]);

	return (
		<section className="products_list_section">
			<header className="align_center products_list_header">
				<h2>Products</h2>
				<select name="sort" id="" className="products_sorting">
					<option value="">Relevance</option>
					<option value="price desc">Price HIGH to LOW</option>
					<option value="price asc">Price LOW to HIGH</option>
					<option value="rate desc">Rate HIGH to LOW</option>
					<option value="rate asc">Rate LOW to HIGH</option>
				</select>
			</header>

			<div className="products_list">
				{error && <em className="form_error">{error}</em>}
				{products.map((product) => (
					<ProductCard
						key={product._id}
						id={product._id}
						image={product.images[0]}
						price={product.price}
						title={product.title}
						rating={product.reviews.rate}
						ratingCounts={product.reviews.counts}
						stock={product.stock}
					/>
				))}
				{isLoading && skeletons.map((n) => <ProductCardSkeleton key={n} />)}
			</div>
			{/* {data?.totalProducts && (
				<Pagination
					totalProducts={data.totalProducts}
					productPerPage={8}
					currentPage={data.currentPage || 1}
					onClick={handlePageChange}
				/>
			)} */}
		</section>
	);
};

export default ProductsList;
