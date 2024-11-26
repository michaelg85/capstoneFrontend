import React from "react";
import { Link } from "react-router-dom";

export default function Help() {
  return (
    <div>
      <div className="title" style={{ color: "yellow" }}>
        <h1>Help!</h1>
        <h2 style={{ textAlign: "left "}}>
          <br />
          Red User adds up to ten movies to their list.
          <br />
          <br />
          Blue User adds up to ten movies to their list.
          <br />
          <br />
          You can add and delete movies from you list at any time.
          <br />
          <br />
          Head over to the 1v1 page and each enter your movie.
          <br />
          <br />
          Click to reveal your destiny!
          <br />
        </h2>
      </div>  
        <div className="title" style={{ color: "yellow" }}>
        <h1>Alternatively!</h1>
        <h2 style={{ textAlign: "left "}}>
          Each choose a movie from your partner's list and enter it into the 1v1, this way at least you had some say in what you're watching tonight!
        </h2>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <h3 style={{ color: "gray" }}>
        Try searching for movies in our comprehensive{" "}
        <Link to="/search">search</Link> tab, before adding them to your list!
      </h3>
    </div>
  );
}
