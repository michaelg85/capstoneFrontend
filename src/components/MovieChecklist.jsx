import { useState } from 'react';

function MovieChecklist({ movies }) {
    //State to keep track of selected movies
    const [checklist, setChecklist] = useState([]);
    const [newMovie, setNewMovie] = useState('');
    const [newMovieChecked, setNewMovieChecked] = useState(false);
  
    //Function to handle adding a movie to the checklist
    const handleAddMovie = (movie) => {
        if (checklist.length < 10 && !checklist.includes(movie)) {
            setChecklist([...checklist, movie]);
            setNewMovie('');
        }
    };



    //Handle the form submission
    const handleSubmit = (e) => {
     e.preventDefault();
        handleAddMovie(newMovie);
    };
  
        //Function to handle removing a movie from the checklist
    const handleRemoveMovie = (movie) => {
        setChecklist(checklist.filter((m) => m !== movie));
    };

  return (
    <div>
      <h2>My Movie Checklist</h2>
      <p>Movies selected: {checklist.length} of 10</p>

      <ul>
        {checklist.map((movie, index) => (
          <li key={index}>
            {movie} 
            <button onClick={() => handleRemoveMovie(movie)}>Remove</button>
          </li>
        ))}
      </ul>

      
      


      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter movie title"
          value={newMovie}
          onChange={(e) => setNewMovie(e.target.value)}
        />
        <button type="submit">Add Movie</button>
      </form>

      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <form>
              <input
                type="checkbox"
                checked={checklist.includes(movie)}
                onChange={() => handleToggleMovie(movie)}
              />
              {movie}
            </form>
          </li>
        ))}
      </ul>

      <h3>Available Movies</h3>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            {movie} 
            <button onClick={() => handleAddMovie(movie)}>
              {checklist.includes(movie) ? "Added" : "Add"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieChecklist;