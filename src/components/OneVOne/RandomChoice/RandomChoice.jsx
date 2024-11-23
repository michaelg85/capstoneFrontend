import { useState } from "react";
import RedMovieDisplay from "../RedMovieDisplay";
import BlueMovieDisplay from "../BlueMovieDisplay";

const RandomChoice = ({redMovie, blueMovie}) => {
  const [selectedChoice, setSelectedChoice] = useState("");

  const selectRandomChoice = () => {
    const choices = [<RedMovieDisplay redMovie={redMovie} />, <BlueMovieDisplay blueMovie={blueMovie} />];
    const randomIndex = Math.floor(Math.random() * choices.length);
    
    setSelectedChoice(choices[randomIndex]);
  };

  return (
    <div style={{ color: "yellow", fontStyle: "italic" }}>
      <h1>Decision Time</h1>
      <button
        onClick={selectRandomChoice}
        style={{ color: "yellow", fontStyle: "italic" }}
      >
        Click to reveal your destiny!
      </button>
      {selectedChoice && <><h1>The Winner is</h1>{selectedChoice}</>}
    </div>
    // <h2>Selected</h2>
    // {selectedChoice}
  );
};

export default RandomChoice;

