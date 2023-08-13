/** @format */

import "./MovieDetails.css";
import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PageContext } from "../../Context/PageContext";
export const MovieDetails = () => {
	const { state, dispatch } = useContext(PageContext);
	const { MovieId } = useParams();
	const findMovie = state?.data?.find(({ id }) => id === Number(MovieId));
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
	} = findMovie;
	const navigate = useNavigate();
	const starButtonClickHandler = (id) => {
		console.log(state?.starredMovies);
		return !state?.starredMovies.includes(id)
			? dispatch({ type: "star-movie", payload: id })
			: dispatch({ type: "unstar-movie", payload: id });
	};
	return (
		<div>
			<div className="movie-details-page">
				<div className="movie-details-image-container">
					<img src={imageURL} alt={title} />
				</div>
				<div className="movie-details-description-container">
					<h1>{title}</h1>
					<p>
						{summary}
						<br />
						Year: <b>{year}</b>
						<br />
						Genre: <b>{genre.map((g) => g).join(", ")}</b>
						<br />
						Ratings: <b>{rating}</b>
						<br />
						Director: <b>{director}</b>
						<br />
						Writer: <b>{writer}</b>
						<br />
						Cast: <b>{cast.map((g) => g).join(", ")}</b>
						<br />
						<div></div>
					</p>
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
			</div>
			<button className="normal-button" onClick={() => navigate(-1)}>
				Back
			</button>
		</div>
	);
};
