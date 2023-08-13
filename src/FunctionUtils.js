/** @format */

export const getAllGenres = (data) =>
	data
		?.reduce((acc, movie) => [...acc, ...movie?.genre], [])
		?.reduce((acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]), [])
		?.sort();

export const getReleaseYears = (data) =>
	data
		?.map((movie) => movie?.year)
		?.reduce((acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]), [])
		?.sort();

export const getAllRatings = (data) =>
	data
		?.map((movie) => movie?.rating)
		?.reduce((acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]), [])
		?.sort();
