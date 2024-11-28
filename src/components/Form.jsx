import { useState } from "react";
import axios from "axios";

export default function Form(props) {
  // State to hold the data of our form
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  // handleChange - updates formData when we type into form
  const handleChange = (event) => {
    // Use the event object to detect key, and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // Prevent page from refreshing on form submission
    event.preventDefault();
    // Pass the search term to moviesearch prop, which is App's getMovie function
    props.moviesearch(formData.searchterm);
  };

  async function handleRedClick() {
    if (!props.movie || !props.movie.Title) {
      alert("No movie selected to add!");
      return;
    }
    console.log("adding to Red List:", props.movie);
    try {
      let newMovie = {
        userId: 1,
        title: props.movie.Title,
        genre: props.movie.Genre,
        poster: props.movie.Poster,
        year: props.movie.Year,
        plot: props.movie.Plot,
        listType: "red",
      };
      if (props.redList.length >= 10){
        alert('You can only have up to 10 movies!')
      }
      else{
        await axios.post("http://localhost:3000/api/movies", newMovie);
        // props.setRedList([...props.redList, newMovie]);
        props.setRedList((prev) => [...prev, newMovie]);
      }
      
    } catch (error) {
      console.error(error);
    }
  }

  async function handleBlueClick() {
    if (!props.movie || !props.movie.Title) {
      alert("No movie selected to add!");
      return;
    }
    console.log("adding to Blue List:", props.movie);
    try {
      let newMovie = {
        userId: 2,
        title: props.movie.Title,
        genre: props.movie.Genre,
        poster: props.movie.Poster,
        year: props.movie.Year,
        plot: props.movie.Plot,
        listType: "blue",
      };
      if (props.blueList.length >= 10){
        alert('You can only have up to 10 movies!')
      }
      else{
       await axios.post("http://localhost:3000/api/movies", newMovie);
        // props.setBlueList([...props.blueList, newMovie]);
        props.setBlueList((prev) => [...prev, newMovie]);
      }

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="heading">
      <div className="title" style={{ color: "yellow" }}>
        <h1>Settle it here!</h1>
        <h2>Each enter up to ten movies and let the game decide...</h2>
        <h1 style={{ fontSize: "35px" }}>Movie Search</h1>
      </div>
      <div className="form-three-column-container">
        <div className="column">
          <button
            style={{ color: "red" }}
            type="button"
            onClick={handleRedClick}
          >
            Add Red Movie
          </button>
        </div>
        <div className="column">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="searchterm"
              onChange={handleChange}
              value={formData.searchterm}
            />
            <br />
            <input type="submit" value="Search" />
          </form>
        </div>
        <div className="column">
          <button
            style={{ color: "lightblue" }}
            type="button"
            onClick={handleBlueClick}
          >
            Add Blue Movie
          </button>
        </div>
      </div>
    </div>
  );
}
