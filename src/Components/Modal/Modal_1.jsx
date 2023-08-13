/** @format */

import React, { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { PageContext } from "../../Context/PageContext";
export const Modal_1 = ({ setShowNewMovie }) => {
	const { state, dispatch } = useContext(PageContext);
	const [movieDetails, setMovieDetails] = useState({
		id: uuid(),
		title: "",
		summary: "",
		year: 0,
		rating: 0,
		genre: [],
		director: "",
		writer: "",
		cast: [],
		summary: "",
		imageURL: ""
	});
	return (
		<div>
			<h2>Add New Movie</h2>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					state?.data?.push(movieDetails);
					console.log(movieDetails)
					setShowNewMovie(false);
				}}
			>
				<div>
					<label>
						Title:
						<input
							required
							type="text"
							onChange={(event) =>
								setMovieDetails((p) => ({ ...p, title: event.target.value }))
							}
							value={movieDetails?.title}
						/>
					</label>
				</div>
				<div>
					<label>
						Summary
						<input
							required
							type="text"
							onChange={(event) =>
								setMovieDetails((p) => ({ ...p, summary: event.target.value }))
							}
							value={movieDetails?.summary}
						/>
					</label>
				</div>
				<div>
					<label>
						Release Year:
						<input
							required
							type="number"
							onChange={(event) =>
								setMovieDetails((p) => ({
									...p,
									year: Number(event.target.value)
								}))
							}
							value={Number(movieDetails?.year)}
						/>
					</label>
				</div>
				<div>
					<label>
						Genre:
						<input
							required
							type="text"
							onChange={(event) => {
								setMovieDetails((p) => ({
									...p,
									genre: event.target.value.split(",")
								}));
								console.log(movieDetails);
							}}
							value={movieDetails?.genre.map((g) => g).join(",")}
						/>
					</label>
				</div>
				<div>
					<label>
						Rating:
						<input
							required
							type="number"
							onChange={(event) =>
								setMovieDetails((p) => ({
									...p,
									rating: Number(event.target.value)
								}))
							}
							value={Number(movieDetails?.rating)}
						/>
					</label>
				</div>
				<div>
					<label>
						Director
						<input
							required
							type="text"
							onChange={(event) =>
								setMovieDetails((p) => ({
									...p,
									director: event.target.value
								}))
							}
							value={movieDetails?.director}
						/>
					</label>
				</div>
				<div>
					<label>
						Writer
						<input
							required
							type="text"
							onChange={(event) =>
								setMovieDetails((p) => ({
									...p,
									writer: event.target.value
								}))
							}
							value={movieDetails?.writer}
						/>
					</label>
				</div>
				<div>
					<label>
						Cast
						<input
							required
							type="text"
							onChange={(event) => {
								setMovieDetails((p) => ({
									...p,
									cast: event.target.value.split(",")
								}));
							}}
							value={movieDetails?.cast.map((g) => g).join(",")}
						/>
					</label>
				</div>

				<div>
					<label>
						Image URL:
						<input
							required
							type="url"
							onChange={(event) =>
								setMovieDetails((p) => ({
									...p,
									imageURL: event.target.value
								}))
							}
							value={movieDetails?.imageURL}
						/>
					</label>
				</div>
				<div>
					<input type="submit" />{" "}
					<button onClick={() => setShowNewMovie(false)}>Close</button>
				</div>
			</form>
		</div>
	);
};
