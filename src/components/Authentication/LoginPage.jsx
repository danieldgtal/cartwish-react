import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import "./LoginPage.css";

const schema = z.object({
	email: z.string().email.min(),
	password: z.string().min(8, "Password must be at least 8 characters long"),
});

const LoginPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

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
							{...register("email", {
								required: "Please enter your email address",
								minLength: { value: 3, message: "Minimum length is 3" },
								pattern: {
									value: /[^\s@]+@[^\s@]+\.[^\s@]+/,
									message: "Enter a valid email address",
								},
							})}
						/>
						{errors.email?.message && (
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
