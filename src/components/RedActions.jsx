import React from "react";
import { ACTIONS } from "../components/RedList";

export default function RedActions({ movie, dispatch }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={movie.complete} // Checked state based on the movie's status
        onChange={() =>
          dispatch({
            type: ACTIONS.TOGGLE_MOVIE, // Dispatch toggle action
            payload: { id: movie.id },
          })
        }
      />

      <span
        style={{ fontSize: "24px", color: movie.complete ? "pink" : "red" }}
      >
        {movie.name}
      </span>

      {/* <input
        onChange={() =>
          dispatch({
            type: ACTIONS.EDIT_MOVIE,
            payload: { id: movie.id },
          })
        }
      ></input> */}

      {/* <button
        onClick={() =>
          dispatch({
            type: ACTIONS.TOGGLE_MOVIE,
            payload: { id: movie.id },
          })
        }
      >
        Completed
      </button> */}

      {/* <button
        onChange={() =>
          dispatch({ type: ACTIONS.EDIT_MOVIE, payload: { id: movie.id } })
        }
      >
        Edit
      </button> */}

      <button
        style={{ fontSize: "14px", padding: "5px 10px" }}
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_MOVIE, payload: { id: movie.id } })
        }
        movie
      >
        Delete
      </button>
    </div>
  );
}
