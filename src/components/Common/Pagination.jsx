import React from "react";
import "./Pagination.css";

const Pagination = ({
	totalProducts,
	productPerPage,
	onClick,
	currentPage = 1,
}) => {
	let pages = [];
	for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
		pages.push(i);
	}
	return (
		<>
			{pages.length > 1 && (
				<ul className="pagination">
					{pages.map((page) => (
						<li key={page}>
							<button
								className={`pagination_button ${
									page === currentPage ? "active" : ""
								}`}
								onClick={() => onClick(page)}
							>
								{page}
							</button>
						</li>
					))}
				</ul>
			)}
		</>
	);
};

export default Pagination;
