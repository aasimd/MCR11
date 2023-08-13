/** @format */

import { MovieCard } from "../../Components/MovieCard/MovieCard";
import { MoviesHeader } from "../../Components/MoviesHeader/MoviesHeader";
import { PageContext } from "../../Context/PageContext";
import "./Starred.css";
import React, { useContext } from "react";

export const Starred = () => {
	const { state, dispatch } = useContext(PageContext);
	return (
		<div>
			<div>
				<h2>Starred Movies</h2>
			</div>
			<div className="movies-list">
				{state?.data?.length > 0 ? (
					<ul>
						{state?.data?.map((movie) => (
							<li key={movie.id}>
								<MovieCard movie={movie} />
							</li>
						))}
					</ul>
				) : (
					<h1>No Movies to Show</h1>
				)}
			</div>
		</div>
	);
};
