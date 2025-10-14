import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import "./LoginPage.css";

const schema = z.object({
	email: z.string().email({ message: "Please Enter a valid email address" }),
	password: z
		.string()
		.min(8, { message: "Password must be at least 8 characters long" }),
});

const LoginPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: zodResolver(schema) });

	const onSubmit = (data) => {
		console.log("Form data:", data);
	};

	const onError = (formErrors) => {
		console.log("Validation errors:", formErrors);
	};

	return (
		<section className="align_center form_page">
			<form
				className="authentication_form"
				noValidate
				onSubmit={handleSubmit(onSubmit, onError)}
			>
				<h2>Login Form</h2>
				<div className="form_inputs">
					<div>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							className="form_text_input"
							placeholder="Enter your email address"
							{...register("email")}
						/>
						{errors.email && (
							<em className="form_error">{errors.email.message}</em>
						)}
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							className="form_text_input"
							placeholder="Enter your password"
							{...register("password")}
						/>
						{errors.password && (
							<em className="form_error">{errors.password.message}</em>
						)}
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
