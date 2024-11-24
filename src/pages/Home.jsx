import { useState, useEffect } from 'react';
import Form from '../components/Form';
import MovieDisplay from '../components/MovieDisplay';
import MovieChecklist from '../components/MovieChecklist';
import { Link } from "react-router-dom";

//Form
export default function Home() {
    const [movie, setMovie] = useState(null); //or [] ?
    //Calls api key from .env
    let key = import.meta.env.VITE_apiKey
  // Function to get movies
  const getMovie = async(searchTerm) => {
    // Make fetch request and store the response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${key}&t=${searchTerm}`
    );
    // Parse JSON response into a JavaScript object
    const data = await response.json();
    // Set the Movie state to the received data
    setMovie(data);
  };

    // This will run on the first render but not on subsquent renders
    useEffect(() => {
      getMovie("Superman");
    }, []);
  
  //Movie checklist
   const movies = [
 
      ];



return (
    <>
        <Form moviesearch={getMovie} />
        <div className="three-column-container">
          <div class="column"><MovieChecklist movies={movies} /></div>
          <div class="column"><MovieDisplay movie={movie} /></div>
          <div class="column"><MovieChecklist movies={movies} /></div>
        </div>
        <br />
        <br />
        <br />
        <div>
          <h3 style={{ color: "gray" }}>
            Try searching for movies in our <Link to="/search">search</Link>{" "}
            tab, before adding them to your list!
          </h3>
        </div>
    </>
  );
}
