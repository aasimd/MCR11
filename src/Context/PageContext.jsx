/** @format */

import React from "react";
import { createContext, useReducer } from "react";
import { movies } from "../data";
export const PageContext = createContext();
const reducerFunction = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case "setSelectedGenre":
			return { ...state, selectedGenre: payload };
		case "setSelectedReleaseYear":
			return { ...state, selectedReleaseYear: payload };
		case "setSelectedRating":
			return { ...state, selectedRating: payload };
		case "setSearchInput":
			return { ...state, searchInput: payload };
		case "star-movie":
			return {
				...state,
				starredMovies: [...state?.starredMovies, payload]
			};
		case "unstar-movie":
			return {
				...state,
				starredMovies: [...state?.starredMovies].filter(
					(a) => a.id !== Number(payload)
				)
			};
		default:
			return state;
	}
};
export const PageContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducerFunction, {
		data: [...movies],
		selectedGenre: "All Genres",
		selectedReleaseYear: 0,
		selectedRating: 0,
		searchInput: "",
		starredMovies: []
	});
	const filterArray = () => {
		const filteredByGenre = [...state?.data]?.filter(({ genre }) =>
			state?.selectedGenre === "All Genres"
				? true
				: genre.includes(state?.selectedGenre)
		);
		const filteredByReleaseYear = [...filteredByGenre]?.filter(({ year }) =>
			state?.selectedReleaseYear === 0
				? true
				: year === state?.selectedReleaseYear
		);
		const filteredByRating = [...filteredByReleaseYear]?.filter(({ rating }) =>
			state?.selectedRating === 0 ? true : rating === state?.selectedRating
		);

		const filterBySearch = [...filteredByRating]?.filter(
			({ title, director, cast }) =>
				state?.searchInput.length === 0
					? true
					: title.toLowerCase().includes(state?.searchInput.toLowerCase()) ||
					  director.toLowerCase().includes(state?.searchInput.toLowerCase()) ||
					  cast
							.map((c) => c.toLowerCase())
							.includes(state?.searchInput?.toLowerCase())
		);
		return filterBySearch;
	};

	const filteredArray = filterArray();
	return (
		<PageContext.Provider value={{ state, dispatch, filteredArray }}>
			{children}
		</PageContext.Provider>
	);
};
