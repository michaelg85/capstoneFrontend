import { useState, useEffect } from 'react';
import Form from '../components/form';
import MovieDisplay from '../components/MovieDisplay';
import { getAllMovies } from '../utilities/controller.mjs'


function Home() {
    const [movie, setMovie] = useState(null);
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
      getMovie("Land Before Time");
    }, []);
  
    // async function getData() {
    //   let res = await getAllMovies();
    //   let newArr = res.sort((a, b) => a.category.localeCompare(b.category));
    //   setInventory(newArr);
    // }
  
    useEffect(()=>{
      getMovie()
    }, [])


return (
    <>
        <Form />
        <MovieDisplay />
        <h3>Loading...</h3>
    </>
  );
}


export default Home;