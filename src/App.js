/** @format */

import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { Modal_1 } from "./Components/Modal/Modal_1";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/test" element={<Modal_1 />} />
			</Routes>
		</div>
	);
}

export default App;
