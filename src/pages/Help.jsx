import React from "react";
import { Link } from "react-router-dom";

export default function Help() {
  return (
    <div>
      <div className="title" style={{ color: "yellow" }}>
        <h1>Help!</h1>
        <h2>
          Here are some insructions to help you use this app, along with some
          fun suggestinos for alternative uses!
        </h2>
        <br />
      </div>
      <h3 style={{ color: "gray" }}>
        Try searching for movies in our comprehensive{" "}
        <Link to="/search">search</Link> tab, before adding them to your list!
      </h3>
    </div>
  );
}
