import { useState, useReducer } from "react";
import BlueActions from "./BlueActions";

export const ACTIONS = {
  ADD_MOVIE: "add-movie",
  CHECKBOX_MOVIE: "check-movie",
  EDIT_MOVIE: "edit-movie",
  TOGGLE_MOVIE: "toggle-movie",
  DELETE_MOVIE: "delete-movie",
};

function reducer(movies, action) {
  switch (action.type) {
    case ACTIONS.ADD_MOVIE:
      return [...movies, newMOVIE(action.payload.name)];



    case ACTIONS.EDIT_MOVIE:
      return movies.map((movie) => {
        if (movie.id === action.payload.id) {
          // return { ...movie, '': action.payload.text };
        }
          return add-movie;
      });



      case ACTIONS.TOGGLE_MOVIE:
      return movies.map((movie) => {
        if (movie.id === action.payload.id) {
          return { ...movie, complete: !movie.complete };
        }
        return movie;
      });



    case ACTIONS.DELETE_MOVIE:
      return movies.filter(movie => movie.id !== action.payload.id)
    default:
      return movies
  }
}

function newMOVIE(name) {
  return { id: Date.now(), name: name, complete: false };
}

export default function App() {
  const [movies, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_MOVIE, payload: { name: name } });
    setName("");
  }

  return (
    <main>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {movies.slice().reverse().map((movie) => {
        return <MOVIE key={movie.id} movie={movie} dispatch={dispatch} />;
      })}
    </main>
  );
}
