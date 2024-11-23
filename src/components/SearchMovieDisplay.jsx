export default function SearchMovieDisplay({ movie }){
    // Function to return loaded JSX
    const loaded = () => {
      return (
        <>
        <div style={{ color: "green" }}>
          <h1>{movie.Title}</h1>
          <h2>{movie.Genre}</h2>
          <img src={movie.Poster} alt={movie.Title} />
          <h2>Rated {movie.Rated} ~ {movie.Year}</h2>
        </div>
          <div style={{ color: "yellow", textAlign: "left" }}>
          <h2>Plot <br/>{movie.Plot}</h2>
          <h2>Box Office Earnings <br/>{movie.BoxOffice}</h2>
          <h2>Directed by <br/>{movie.Director}</h2>
          <h2>Written by <br/>{movie.Writer}</h2>
          <h2>Released <br/>{movie.Released}</h2>          
          <h2>Awards <br/>{movie.Awards}</h2>
          <h2>Metascore <br/>{movie.Metascore}</h2>
          <h2>IMDb Rating <br/>{movie.imdbRating} with a total of { movie.imdbVotes} votes</h2>
          <h2>
            <span style={{ fontSize: '24px' }}>IMDb ID </span><br/>
            <span style={{ fontSize: '16px' }}>{movie.imdbID}</span>
          </h2>
          <h2>Country <br/>{movie.Country}</h2>
          <h2>Language <br/>{movie.Language}</h2>
          {/* <h2>Type - {movie.Type}</h2> */}
          {/* <h2>DVD - {movie.DVD}</h2> */}
          {/* <h2>Production - {movie.Production}</h2> */}
          {/* <h2>Website - {movie.Website}</h2> */}
        </div>
        <br /><br />
        <div>Box office earnings are calculated by simply adding up the total amount of money collected from ticket sales at movie theaters, with the final figure representing the "gross" box office revenue for a film; however, to determine a movie's actual profit, you need to subtract the theater's share of the revenue (usually around 50%) from the gross, which varies depending on the film and theater agreement, before considering other production and marketing costs.
        </div>
        <br />
        <div>Metascore is considered the rating of a film. Scores are assigned to movie's reviews of large group of the world's most respected critics, and weighted average are applied to summarize their opinions range. The result is shown in single number that captures the essence of critical opinion in one Metascore.
        </div>
        <br />
        <div>An IMDb ID is a unique identifier for an entity on IMDb, such as a movie, TV series, episode, video game, or person.
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
  