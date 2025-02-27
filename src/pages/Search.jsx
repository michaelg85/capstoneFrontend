import { useState, useEffect } from "react";
import SearchMovieForm from "../components/SearchMovieForm";
import SearchMovieDisplay from "../components/SearchMovieDisplay";

//Form
export default function Search() {
  const [movie, setMovie] = useState(null); //or [] ?
  //Calls api key from .env
  let key = import.meta.env.VITE_apiKey;
  // Function to get movies
  const getMovie = async (searchTerm) => {
    // Make fetch request and store the response
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${key}&t=${searchTerm}`
    );
    // Parse JSON response into a JavaScript object
    const data = await response.json();
    // Set the Movie state to the received data
    setMovie(data);
  };

  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("A Charlie Brown Thanksgiving");
  }, []);

  return (
    <>
      <SearchMovieForm moviesearch={getMovie} />
      <SearchMovieDisplay movie={movie} />
      <br/>
    </>
  );
}
