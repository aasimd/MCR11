/** @format */

import React from "react";
import { createContext, useReducer } from "react";

export const PageContext = createContext();
const reducerFunction = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case "1":
			return state;
		default:
			return state;
	}
};
export const PageContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducerFunction, {});
	return (
		<PageContext.Provider value={{ state, dispatch }}>
			{children}
		</PageContext.Provider>
	);
};
