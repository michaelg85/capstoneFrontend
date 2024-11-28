import { useState, useEffect } from "react";
import RedMovieDisplay from "../components/OneVOne/RedMovieDisplay";
import RedForm from "../components/OneVOne/RedForm";
import BlueMovieDisplay from "../components/OneVOne/BlueMovieDisplay";
import BlueForm from "../components/OneVOne/BlueForm";
import SelectedChoice from "../components/OneVOne/RandomChoice/RandomChoice";
import RandomChoiceDisplay from "../components/OneVOne/RandomChoiceDisplay/RandomChoiceDisplay";
// import OneMovieDisplay from "../components/OneVOne/OneMovieDisplay";
// import OneForm from "../components/OneVOne/OneForm";
import { Link } from "react-router-dom";

export default function OneVOne() {
  // State to hold movie data
  const [movie, setMovie] = useState(null);
  const [redMovie, setRedMovie] = useState(null);
  const [blueMovie, setBlueMovie] = useState(null);
  const [randomChoice, setRandomChoice] = useState(null);
  // const [selectedMovie, setSelectedMovie] = useState(null);

  // Constant with your API Key
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
    getMovie("Land Before Time");
  }, []);

  // Function to get RED movies
  const getRedMovie = async (searchTerm) => {
    // Make fetch request and store the response
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${key}&t=${searchTerm}`
    );
    // Parse JSON response into a JavaScript object
    const data = await response.json();
    // Set the Movie state to the received data
    setRedMovie(data);
  };

  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getRedMovie("Superman");
  }, []);

  // Function to get BLUE movies
  const getBlueMovie = async (searchTerm) => {
    // Make fetch request and store the response
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${key}&t=${searchTerm}`
    );
    // Parse JSON response into a JavaScript object
    const data = await response.json();
    // Set the Movie state to the received data
    setBlueMovie(data);
  };

  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getBlueMovie("Wonder Woman");
  }, []);

  // Function to get RANDOM CHOICE movies
  const getRandomChoice = async (searchTerm) => {
    // Make fetch request and store the response
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${key}&t=${searchTerm}`
    );
    // Parse JSON response into a JavaScript object
    const data = await response.json();
    // Set the Movie state to the received data
    setRandomChoice(data);
  };

  // // This will run on the first render but not on subsquent renders
  // useEffect(() => {
  //   getRandomChoice("Superman");
  // }, []);

  return (
    <>
      <main>
        {/* Title & description */}
        <div className="title" style={{ color: "yellow" }}>
          <h1 style={{ fontSize: "55px" }}>1 v 1</h1>
          <h1>Quick and easy!</h1>
          <h2>Each enter a movie and let the game decide...</h2>
        </div>

        {/* Red & Blue Columns */}
        <div className="oneContainer">
          {/* Left RED Column */}
          <div>
            <RedForm redMoviesearch={getRedMovie} />
            <RedMovieDisplay redMovie={redMovie} />
          </div>
          {/* Right BLUE Column */}
          <div>
            <BlueForm blueMoviesearch={getBlueMovie} />
            <BlueMovieDisplay blueMovie={blueMovie} />
          </div>
        </div>
        <br />
        <br />
        <br />

        {/* Random Choice */}
        <div className="random choice">
          <SelectedChoice
            redMovie={redMovie}
            blueMovie={blueMovie}
            selectedChoice={setRandomChoice}
          />
          <RandomChoiceDisplay randomChoice={randomChoice} />
        </div>

        {/* Movie Search Engine */}

        {/* <div className="One">
          <OneForm moviesearch={getMovie} />
          <OneMovieDisplay movie={movie} />
        </div> */}

        <br />
        <br />
        <br />
        <div>
          <h3 style={{ color: "gray" }}>
            Try searching for movies in our comprehensive <Link to="/search">search</Link>{" "}
            tab, before adding them to your list!
          </h3>
        </div>
      </main>
    </>
  );
}
