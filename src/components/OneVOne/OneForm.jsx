import { useState } from "react";

export default function OneForm (props) {
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
    <div>
      <h1 style={{ color: "green" }}>Movie Search</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
