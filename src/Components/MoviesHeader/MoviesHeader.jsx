/** @format */

import "./MoviesHeader.css";
import React, { useContext } from "react";
import {
	getAllGenres,
	getReleaseYears,
	getAllRatings
} from "../../FunctionUtils";
import { PageContext } from "../../Context/PageContext";
export const MoviesHeader = ({ setShowNewMovie }) => {
	const { state, dispatch } = useContext(PageContext);
	const allGenres = getAllGenres(state?.data);
	const releaseYears = [
		1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001,
		2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
		2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023
	];
	const allRatings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	// console.log(allGenres, releaseYears);
	return (
		<div className="movies-header">
			<div>
				<h1>Movies</h1>
			</div>
			<div>
				<label>Genres: </label>
				<select
					onChange={(event) =>
						dispatch({ type: "setSelectedGenre", payload: event.target.value })
					}
				>
					<option value={"All Genres"}>All</option>
					{allGenres?.map((genre) => (
						<option key={genre} value={genre}>
							{genre}
						</option>
					))}
				</select>
			</div>
			<div>
				<label>Release year: </label>
				<select
					onChange={(event) =>
						dispatch({
							type: "setSelectedReleaseYear",
							payload: Number(event.target.value)
						})
					}
				>
					<option value={0}>All</option>
					{releaseYears?.map((year) => (
						<option key={year} value={year}>
							{year}
						</option>
					))}
				</select>
			</div>
			<div>
				<label>Ratings: </label>
				<select
					onChange={(event) => {
						dispatch({
							type: "setSelectedRating",
							payload: Number(event.target.value)
						});
					}}
				>
					<option value={0}>All</option>
					{allRatings?.map((rating) => (
						<option key={rating} value={rating}>
							{rating}
						</option>
					))}
				</select>
			</div>
			<button onClick={() => setShowNewMovie(() => true)}>Add a Movie</button>
		</div>
	);
};
