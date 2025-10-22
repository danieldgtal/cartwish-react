import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useData from "../../hooks/useData";

import "./SingleProductPage.css";
import QuantityInput from "./QuantityInput";
import Loader from "../Common/Loader";

// fallback initial state while loading
const fallbackProduct = {
	id: "",
	title: "",
	description: "",
	price: 0,
	images: [],
	stock: 0,
};

const SingleProductPage = () => {
	const { id } = useParams();

	const { data, error, isLoading } = useData(`/products/${id}`, {}, [id]);
	const product = data || fallbackProduct;
	const [selectedImage, setSelectedImage] = useState(0);
	const [quantity, setQuantity] = useState(1);

	useEffect(() => {
		setSelectedImage(0);
	}, [id]);

	return (
		<section className="align_center single_product">
			{error && <em className="form_error">{error}</em>}
			{isLoading && <Loader />}
			<div className="align_center">
				<div className="single_product_thumbnails">
					{product.images && product.images.length > 0 ? (
						product.images.map((image, index) => (
							<img
								key={image}
								src={`http://localhost:5000/products/${image}`}
								alt={product.title}
								className={selectedImage === index ? "selected_image" : ""}
								onClick={() => setSelectedImage(index)}
							/>
						))
					) : (
						<div>No images available</div>
					)}
				</div>

				{product.images && product.images.length > 0 ? (
					<img
						src={`http://localhost:5000/products/${product.images[selectedImage]}`}
						alt={product.title}
						className="single_product_display"
					/>
				) : (
					<div className="single_product_display">No image available</div>
				)}
			</div>

			<div className="single_product_details">
				<h1 className="single_product_title">
					{product.title || "Loading..."}
				</h1>
				<p className="single_product_description">
					{product.description || "Loading description..."}
				</p>
				<p className="single_product_price">
					${product.price ? product.price.toFixed(2) : "0.00"}
				</p>

				<h2 className="quantity_title">Quantity:</h2>
				<div className="align_center quantity_input">
					<QuantityInput
						quantity={quantity}
						setQuantity={setQuantity}
						stock={product.stock}
					/>
				</div>

				<button className="search_button add_cart">Add to Cart</button>
			</div>
		</section>
	);
};

export default SingleProductPage;
