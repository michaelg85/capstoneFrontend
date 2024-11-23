import React from "react";
import { Link } from 'react-router-dom';

export default function AboutUs () {

  return (
    <div>
        <div className="title" style={{ color: "yellow" }}>
        <h1>About Us!</h1>
        <h2>My wife and I love each other very much but when it comes to choosing whose movie to watch it can become quite contentious!
input you list of up to ten movies and select which movies you'd like to enter into the ring, then let the app decide!
if you let the app choose, you must watch it all the way through so "enter" with caution!
another option is to let each other choose a predetermined ammount of movies from your partners list and then let the app decide!</h2>
        </div>
            <h3 style={{ color: "gray" }}>Try searching for movies in our <Link to="/search">search</Link> tab, before adding them to your list!</h3>
    </div>
    
  );
}
