import React from "react";
import { ACTIONS } from "../components/RedList";
import axios from "axios";

export default function RedActions({ movie, dispatch, redList, setRedList }) {
  async function handleDelete() {
    try {
      await axios.delete(`https://whosemoviebackend.onrender.com/api/movies/${movie._id}`);
      let newList = redList.filter((el) => el._id !== movie._id);
      setRedList(newList);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={movie.complete} // Checked state based on the movie's status
        onChange={() =>
          dispatch({
            type: ACTIONS.TOGGLE_MOVIE, // Dispatch toggle action
            payload: { id: movie._id },
          })
        }
      />

      <span
        style={{ fontSize: "24px", color: movie.complete ? "pink" : "red" }}
      >
        {movie.title}
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
        onClick={() => handleDelete()}
        movie
      >
        Delete
      </button>
    </div>
  );
}
