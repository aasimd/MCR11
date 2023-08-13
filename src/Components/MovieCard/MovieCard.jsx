/** @format */

import { PageContext } from "../../Context/PageContext";
import "./MovieCard.css";
import React, { useContext } from "react";

export const MovieCard = ({ movie }) => {
	const { state, dispatch } = useContext(PageContext);
	const {
		id,
		title,
		year,
		genre,
		rating,
		director,
		writer,
		cast,
		summary,
		imageURL
	} = movie;
	const starButtonClickHandler = (id) => {
		return !state?.starredMovies.includes(id)
			? () => {
					dispatch({ type: "star-movie", payload: id });
					console.log(state?.starredMovies);
			  }
			: () => {
					dispatch({ type: "unstar-movie", payload: id });
			  };
	};
	return (
		<div className="movie-card" style={{ zIndex: "1" }}>
			<div className="movie-card-image-container">
				<img src={imageURL} alt={title} />
			</div>
			<div className="movie-card-description">
				<h3>{title}</h3>
				<p>{summary}</p>
			</div>
			<div className="movie-card-buttons">
				<button
					style={{ zIndex: "5" }}
					onClick={() => starButtonClickHandler(id)}
				>
					Star
				</button>
				<button>Add to Wishlist</button>
			</div>
		</div>
	);
};
