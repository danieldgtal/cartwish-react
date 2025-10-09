import React from "react";
import "./Navbar.css";
import rocket from "../../assets/rocket.png";
import star from "../../assets/glowing-star.png";
import idButton from "../../assets/id-button.png";
import memo from "../../assets/memo.png";
import order from "../../assets/package.png";
import lock from "../../assets/locked.png";
import LinkWithIcon from "./LinkWithIcon";

const Navbar = () => {
	return (
		<nav className="align_center navbar">
			<div className="align_center">
				<h1 className="navbar_heading">CartWish</h1>
				<form className="align_center navbar_form">
					<input
						type="text"
						className="navbar_search"
						placeholder="Search Products"
					/>
					<button type="submit" className="search_button">
						Search
					</button>
				</form>
			</div>
			<div className="navbar_links align_center">
				<LinkWithIcon title="Home" link="/" emoji={rocket} />
				<LinkWithIcon title="Products" link="/" emoji={star} />
				<LinkWithIcon title="Login" link="/" emoji={idButton} />
				<LinkWithIcon title="SignUp" link="/" emoji={memo} />
				<LinkWithIcon title="My Orders" link="/" emoji={order} />
				<LinkWithIcon title="Logout" link="/" emoji={lock} />
				<a href="/cart" className="align_center">
					Cart <p className="align_center cart_counts">0</p>
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
