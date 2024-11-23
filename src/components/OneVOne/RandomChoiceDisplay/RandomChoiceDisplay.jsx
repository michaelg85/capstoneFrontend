export default function RandomChoiceDisplay({ randomMovie }) {
  // Function to return loaded JSX
  const loaded = () => {
    return (
      <div>
        <h1>{randomMovie.Title}</h1>
        <h2>{randomMovie.Genre}</h2>
        <img src={randomMovie.Poster} alt={randomMovie.Title} />
        <h2>{randomMovie.Year}</h2>
        {/* <h2>{randomMovie.Plot}</h2> */}
      </div>
    );
  };

  // Function to return loading JSX
  const loading = () => {
    return <h1>{randomMovie}</h1>;
  };

  // Ternary operator will determine which functions JSX we will return
  return randomMovie ? loaded() : loading();
}
