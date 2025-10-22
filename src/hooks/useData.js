import React from "react";
import { useState, useEffect } from "react";
import apiClient from "../utils/api-client";

/**
 * Custom React hook for fetching data from an API endpoint
 *
 * @param {string} endpoint - The API endpoint to fetch data from
 * @param {Object} customConfig - Optional configuration object for the API request (e.g., headers, params)
 * @param {Array} deps - Optional dependency array for useEffect. If not provided, defaults to empty array (runs once on mount)
 *
 * @returns {Object} Object containing:
 *   - data: The fetched data (null until loaded)
 *   - error: Error message string if request fails (empty string by default)
 *   - isLoading: Boolean indicating if request is in progress
 *
 * @example
 * const { data, error, isLoading } = useData('/api/users', {}, [userId]);
 *
 * if (isLoading) return <Spinner />;
 * if (error) return <Error message={error} />;
 * return <UserList users={data} />;
 */
const useData = (endpoint, customConfig, deps) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(
		() => {
			let cancelled = false;
			setIsLoading(true);
			setError("");
			apiClient
				.get(endpoint, customConfig)
				.then((res) => {
					if (cancelled) return;
					setData(res.data);
				})
				.catch((err) => {
					if (cancelled) return;
					setError(err.message);
				})
				.finally(() => {
					if (cancelled) return;
					setIsLoading(false);
				});
			return () => {
				cancelled = true;
			};
		},
		deps ? deps : []
	);

	return { data, error, isLoading };
};

export default useData;
