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

  // useEffect(() => {
  //   getBlueList();
  // }, []);

  // useEffect(() => {
  //   async function getBlueList() {
  //     try {
  //       const res = await axios.get("http://localhost:3000/api/movies?userId=2");
  //       props.setBlueList(res.data); // No need for local blueList management
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   getBlueList();
  // }, [props.setBlueList]);

  useEffect(() => {
    async function fetchBlueMovies() {
      try {
        const response = await axios.get("http://localhost:3000/api/movies", {
          params: { userId: 2 },
        });
        props.setBlueList(response.data);
      } catch (error) {
        console.error("Error fetching blue list:", error);
      }
    }
    fetchBlueMovies();
  }, [props.setBlueList]);

  return (
    <main>
      <div>
        <h1 style={{ color: "lightblue" }}>Blue List</h1>
        {props.blueList
          .slice()
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
