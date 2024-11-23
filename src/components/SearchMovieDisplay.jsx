export default function SearchMovieDisplay({ movie }){
    // Function to return loaded JSX
    const loaded = () => {
      return (
        <>
        <div style={{ color: "green" }}>
          <h1>{movie.Title}</h1>
          <h2>{movie.Genre}</h2>
          <img src={movie.Poster} alt={movie.Title} />
          <h2>{movie.Year}</h2>
          <h2 >{movie.Plot}</h2>
          <h2 >{movie.Rated}</h2>
          <h2 >{movie.Released}</h2>
          <h2 >{movie.Director}</h2>
          <h2 >{movie.Writer}</h2>
          <h2 >{movie.Language}</h2>
          <h2 >{movie.Country}</h2>
          <h2 >{movie.Awards}</h2>
          <h2 >{movie.Metascore}</h2>
          <h2 >{movie.imdbRating}</h2>
          <h2 >{movie.imdbVotes}</h2>
          <h2 >{movie.imdbID}</h2>
          <h2 >{movie.Type}</h2>
          <h2 >{movie.DVD}</h2>
          <h2 >{movie.BoxOffice}</h2>
          <h2 >{movie.Production}</h2>
          <h2 >{movie.Website}</h2>
          </div>
        </>
      );
    };
  
    // Function to return loading JSX
    const loading = () => {
      return <h1>No Movie to Display</h1>;
    };
  
    // Ternary operator will determine which functions JSX we will return
    return movie ? loaded() : loading();
  }