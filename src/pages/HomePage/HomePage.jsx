/** @format */
import "./HomePage.css";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageContext } from "../../Context/PageContext";
import { MovieCard } from "../../Components/MovieCard/MovieCard";
import { MoviesHeader } from "../../Components/MoviesHeader/MoviesHeader";
import { Modal_1 } from "../../Components/Modal/Modal_1";

export const HomePage = () => {
	const navigate = useNavigate();
	const [showNewMovie, setShowNewMovie] = useState(false);
	const { state, dispatch, filteredArray } = useContext(PageContext);
	return (
		<div>
			{showNewMovie && (
				<div className="add-new-movie-modal">
					<Modal_1 setShowNewMovie={setShowNewMovie} />
				</div>
			)}
			<div>
				<div>
					<MoviesHeader setShowNewMovie={setShowNewMovie} />
				</div>
				<div className="movies-list">
					{filteredArray?.length > 0 ? (
						<ul>
							{filteredArray.map((movie) => (
								<li
									onClick={() => navigate(`/movie/${movie?.id}`)}
									key={movie.id}
								>
									<MovieCard movie={movie} />
								</li>
							))}
						</ul>
					) : (
						<h1>No Movies to Show</h1>
					)}
				</div>
			</div>
		</div>
	);
};
