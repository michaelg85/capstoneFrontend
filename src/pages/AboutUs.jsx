import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div>
      <div className="title" style={{ color: "yellow" }}>
        <h1>About Us!</h1>
        <h2 style={{ textAlign: 'justify' }}>
          I decided to create this app to help my wife and I (along with
          countless couples) pick whose movie will be watched! Too much time is spent trying to decide. That ends here, with the Whose Movie?! app.
          <br />
          <br />
          Create a list of up to ten movies you'd like to watch, come back any time and then take your movie to the 1v1 page and face off! "Enter" with caution! If you let the app decide you must stick to the desicion that's been made. (Well, no one's holding you to it, but then what's the point of all this!?)
          <br />
          <br />
          My wife and I love to watch movies together... we also love each other very much. When it
          comes to choosing whose movie to watch, we all know, it can become quite the debate! Not to mention the ammount of time spent deciding.
          <br />
          <br />
          Need some <Link to="/help">help </Link> deciding how to use the app? 
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
