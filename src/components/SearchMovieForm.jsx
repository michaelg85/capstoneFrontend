import {useState, useEffect} from "react";

export default function SearchMovieForm (props) {
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

  return (
    <div className="title" style={{ color: "green" }}>
        <h1>Movie Search</h1>
        <h2>Search with more detail here!</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="searchterm"
                onChange={handleChange}
                value={formData.searchterm}
                />
                <input type="submit" value="Search" />
            </form>
    </div>
    
  );
}