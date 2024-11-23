import { useState, useEffect } from 'react';
import Form from '../components/form';
import MovieDisplay from '../components/MovieDisplay';
import MovieChecklist from '../components/MovieChecklist';
import { ACTIONS } from '../components/BlueList';
// import { getAllMovies } from '../utilities/controller.mjs';

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

  //BlueList


return (
    <>
        <Form moviesearch={getMovie} />
        {/* <MovieDisplay movie={movie} /> */}
        {/* <MovieChecklist movies={movies} /> */}
        <ACTIONS movie={movie} />
    </>
  );
}


// export default Home;
