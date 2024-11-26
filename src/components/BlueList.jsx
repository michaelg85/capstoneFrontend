import { useState, useReducer, useEffect } from "react";
import BlueActions from "./BlueActions";
import axios from "axios";

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
      return [...movies, newMovie(action.payload.name)];

    case ACTIONS.EDIT_MOVIE:
      return movies.map((movie) => {
        if (movie._id === action.payload.id) {
          // return { ...movie, '': action.payload.text };
        }
        return add - movie;
      });

    case ACTIONS.TOGGLE_MOVIE:
      return movies.map((movie) => {
        if (movie._id === action.payload.id) {
          return { ...movie, complete: !movie.complete };
        }
        return movie;
      });

    case ACTIONS.DELETE_MOVIE:
      return movies.filter((movie) => movie._id !== action.payload._id);
    default:
      return movies;
  }
}

function newMovie(name) {
  return { id: Date.now(), name: name, complete: false };
}

export default function BlueList(props) {
  const [movies, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  const [blueList, setBlueList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_MOVIE, payload: { id: user2, name: name } });
    setName("");
  }

  async function getBlueList() {
    try {
      let getAllMovies = {
        userId: 2,
      };

      let res = await axios.get(
        "http://localhost:3000/api/movies",
        getAllMovies
      );
      props.setBlueList(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getBlueList();
  }, []);

  return (
    <main>
      <div>
        <h1 style={{ color: "lightblue" }}>Blue List</h1>
        {/* <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your movies..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Add Movie</button>
        </form> */}

        {props.blueList
          .slice([])
          .reverse()
          .map((movie) => {
            return (
              <BlueActions
                key={movie._id || movie.title + movie.year}
                movie={movie}
                dispatch={dispatch}
                blueList={props.blueList}
                setBlueList={props.setBlueList}
              />
            );
          })}
      </div>
    </main>
  );
}
