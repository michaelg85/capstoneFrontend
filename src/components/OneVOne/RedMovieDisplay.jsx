export default function RedMovieDisplay({ redMovie }) {
  // Function to return loaded JSX
  const loaded = () => {
    return (
      <div style={{ color: "red" }}>
        <h1>{redMovie.Title}</h1>
        <h2>{redMovie.Genre}</h2>
        <img src={redMovie.Poster} alt={redMovie.Title} />
        <h2>{redMovie.Year}</h2>
        {/* <h2>{redMovie.Plot}</h2> */}
      </div>
    );
  };

  // Function to return loading JSX
  const loading = () => {
    return <h1>{redMovie}</h1>;
  };

  // Ternary operator will determine which functions JSX we will return
  return redMovie ? loaded() : loading();
}
