import { useState, useReducer, useEffect } from "react";
import RedActions from "./RedActions";
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
      return movies.filter((movie) => movie.id !== action.payload.id);
    default:
      return movies;
  }
}

function newMovie(name) {
  return { id: Date.now(), name: name, complete: false };
}

export default function RedList(props) {
  const [movies, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  const [redList, setRedList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_MOVIE, payload: { id: user1, name: name } });
    setName("");
  };

  async function getRedList() {
    try {
      let getAllMovies = {
        userId: 1
      };

      let res = await axios.get("http://localhost:3000/api/movies", getAllMovies);
      props.setRedList(res.data);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getRedList();
  }, []);

  return (
    <main>
      <div>
        <h1 style={{ color: "red" }}>Red List</h1>
        {/* <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your movies..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Add Movie</button>
        </form> */}

        {props.redList
          .slice()
          .reverse()
          .map((movie) => {
            return (
              <RedActions key={movie._id} movie={movie} dispatch={dispatch} redList={props.redList} setRedList={props.setRedList} />
            );
          })}
      </div>
    </main>
  );
}
