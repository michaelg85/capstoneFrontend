export default function BlueMovieDisplay({ blueMovie }) {
  // Function to return loaded JSX
  const loaded = () => {
    return (
      <div style={{ color: "skyblue" }}>
        <h1>{blueMovie.Title}</h1>
        <h2>{blueMovie.Genre}</h2>
        <img src={blueMovie.Poster} alt={blueMovie.Title} />
        <h2>{blueMovie.Year}</h2>
        {/* <h2>{blueMovie.Plot}</h2> */}
      </div>
    );
  };

  // Function to return loading JSX
  const loading = () => {
    return <h1>{blueMovie}</h1>;
  };

  // Ternary operator will determine which functions JSX we will return
  return blueMovie ? loaded() : loading();
}
