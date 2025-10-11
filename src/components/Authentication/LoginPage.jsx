import React, { useRef, useState } from "react";

import "./LoginPage.css";

const LoginPage = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(user);
	};

	return (
		<section className="align_center form_page">
			<form className="authentication_form" onSubmit={handleSubmit}>
				<h2>Login Form</h2>
				<div className="form_inputs">
					<div>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							className="form_text_input"
							placeholder="Enter your email address"
							onChange={(e) => setUser({ ...user, email: e.target.value })}
							value={user.email}
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							className="form_text_input"
							placeholder="Enter your password"
							onChange={(e) => setUser({ ...user, password: e.target.value })}
							value={user.password}
						/>
						<button type="button">Hide Password</button>
						<button type="button">Show Password</button>
					</div>

					<button type="submit" className="search_button form_submit">
						Submit
					</button>
				</div>
			</form>
		</section>
	);
};

export default LoginPage;
