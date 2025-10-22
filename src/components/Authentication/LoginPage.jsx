import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "../../services/userServices";

import "./LoginPage.css";
import { Navigate, useNavigate } from "react-router-dom";

const schema = z.object({
	email: z.string().email({ message: "Please Enter a valid email address" }),
	password: z
		.string()
		.min(5, { message: "Password must be at least 5 characters long" }),
});

const LoginPage = () => {
	const [formError, setFormError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	let navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: zodResolver(schema) });

	const onSubmit = async (formData) => {
		setIsLoading(true);
		setFormError("");
		try {
			const { data } = await login(formData);
			localStorage.setItem("token", data.token);

			navigate("/");
		} catch (error) {
			console.error("Login error:", error);
			if (error.response && error.response.status === 400) {
				setFormError(error.response.data.message);
			} else {
				setFormError("Login failed. Please try again.");
			}
		} finally {
			setIsLoading(false);
		}
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
					</div>

					{formError && <em className="form_error">{formError}</em>}
					<button
						type="submit"
						className="search_button form_submit"
						disabled={isLoading}
					>
						{isLoading ? "Logging in..." : "Submit"}
					</button>
				</div>
			</form>
		</section>
	);
};

export default LoginPage;
