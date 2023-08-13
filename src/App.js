/** @format */

import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { Modal_1 } from "./Components/Modal/Modal_1";
import { NavBar } from "./Components/NavBar/NavBar";
import { Starred } from "./pages/Starred/Starred";
import { MovieDetails } from "./pages/MovieDetails/MovieDetails";

function App() {
	return (
		<div className="App">
			<nav>
				<NavBar />
			</nav>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/test" element={<Modal_1 />} />
				<Route path="/starredmovies" element={<Starred />} />
				<Route path="/movie/:MovieId" element={<MovieDetails />} />
			</Routes>
		</div>
	);
}

export default App;
