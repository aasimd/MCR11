/** @format */

import "./NavBar.css";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { PageContext } from "../../Context/PageContext";

const activeButtonStyles = ({ isActive }) =>
	isActive
		? {
				color: "#333333",
				padding: "10px",
				fontWeight: "600",
				backgroundColor: "white",
				fontSize: "1rem",
				borderRadius: "10px"
		  }
		: { padding: "10px", fontWeight: "200", fontSize: "1rem", color: "white" };

export const NavBar = () => {
	const { state, dispatch } = useContext(PageContext);
	const navigate = useNavigate();
	return (
		<div className="NavBar">
			<h1 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
				IMDB
			</h1>
			<input
				onChange={(event) => {
					dispatch({ type: "setSearchInput", payload: event?.target?.value });
				}}
				value={state?.searchInput}
				type="search"
				placeholder="Search Movies by Title, Cast or Director's Name"
			/>
			<ul>
				<li>
					<NavLink to="/" style={activeButtonStyles}>
						Movies
					</NavLink>
				</li>
				<li>
					<NavLink to="/watchlist" style={activeButtonStyles}>
						Watch List
					</NavLink>
				</li>
				<li>
					<NavLink to="/starredmovies" style={activeButtonStyles}>
						Starred Movies
					</NavLink>
				</li>
			</ul>
		</div>
	);
};
