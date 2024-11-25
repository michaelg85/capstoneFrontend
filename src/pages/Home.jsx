import { useState, useEffect } from 'react';
import Form from '../components/Form';
import MovieDisplay from '../components/MovieDisplay';
// import MovieChecklist from '../components/MovieChecklist';
import RedList from '../components/RedList';
import BlueList from '../components/BlueList';
import { Link } from "react-router-dom";

//Form
export default function Home() {
  const [movie, setMovie] = useState(null);
  // const [formData, setFormData] = useState({
  //   searchParams: '',
  //   movies: false,
  // });
  
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
  
  // //Movie checklist
  //  const movies = [
 
  //     ];

  //Red List
   const redList = [
    
   ];

  //Blue List
   const blueList = [
    
   ];


   return (
    <>
        <Form moviesearch={getMovie} />
        <div className="three-column-container">
          <div className="column"><RedList redList={redList} /></div>
          <div className="column"><MovieDisplay movie={movie} /></div>
          <div className="column"><BlueList blueList={blueList} /></div>
        </div>
        <br />
        <br />
        <br />
        <div>
          <h3 style={{ color: "gray" }}>
            Try searching for movies in our comprehensive <Link to="/search">search</Link>{" "}
            tab, before adding them to your list!
          </h3>
        </div>
    </>
  );
}
