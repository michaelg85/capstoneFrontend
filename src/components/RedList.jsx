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

export default function RedList(props) {
  const [movies, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  const [redList, setRedList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_MOVIE, payload: { id: user1, name: name } });
    setName("");
  }

  async function getRedList() {
    try {
      let getAllMovies = {
        userId: 1,
      };

      let res = await axios.get(
        "https://whosemoviebackend.onrender.com/api/movies",
        getAllMovies
      );
      props.setRedList(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  // useEffect(() => {
  //   getRedList();
  // }, []);

  // useEffect(() => {
  //   async function getRedList() {
  //     try {
  //       const res = await axios.get("https://whosemoviebackend.onrender.com/movies?userId=1");
  //       props.setRedList(res.data); // No need for local redList management
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   getRedList();
  // }, [props.setRedList]);

  useEffect(() => {
    async function fetchRedMovies() {
      try {
        const response = await axios.get("https://whosemoviebackend.onrender.com/api/movies", {
          params: { userId: 1 },
        });
        props.setRedList(response.data); // No local state, update parent state
      } catch (error) {
        console.error("Error fetching red list:", error);
      }
    }
    fetchRedMovies();
  }, [props.setRedList]);

  async function handleRedClick() {
    if (!props.movie?.Title) {
      alert("No movie selected to add!");
      return;
    }
    try {
      let newMovie = { /* Same movie structure */ };
      if (props.redList.length >= 10) {
        alert("You can only have up to 10 movies!");
      } else {
        await axios.post("https://whosemoviebackend.onrender.com/api/movies", newMovie);
        props.setRedList((prev) => [...prev, newMovie]);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main>
      <div>
        <h1 style={{ color: "red" }}>Red List</h1>
        {props.redList
          .slice()
          .reverse()
          .map((movie) => {
            return (
              <RedActions
                key={movie._id || movie.title + movie.year}
                movie={movie}
                dispatch={dispatch}
                redList={props.redList}
                setRedList={props.setRedList}
              />
            );
          })}
      </div>
    </main>
  );
}
