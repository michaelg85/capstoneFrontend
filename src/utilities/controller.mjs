import axios from "axios";

async function getAllMovies() {
  try {
    let url = "http://localhost:3000/api/movies";

    let res = await axios.get(url);

    return res.data;
  } catch (err) {
    console.error(err);
  }
}

async function createMovie(formData) {
  try {
    let url = "http://localhost:3000/api/movie";

    // formData.price = '$' + formData.price;

    let res = await axios.post(url, formData);

    return res.data;
  } catch (err) {
    console.error(err);
  }
}

async function getOneMovie() {
  try {
    let url = "http://localhost:3000/api/movie/:id"; //This way?

    let res = await axios.get(url);

    return res.data;
  } catch (err) {
    console.error(err);
  }
}

async function updateOneMovie(id, formData) {
  try {
    let url = `http://localhost:3000/api/movies/${id}`;

    //   formData.price = '$' + formData.price;

    let res = await axios.put(url, formData);

    return res.data;
  } catch (err) {
    console.error(err);
  }
}

async function deleteMovie(id) {
  try {
    let url = `http://localhost:3000/api/movies/${id}`; //Or this way?

    let res = await axios.delete(url);

    return true;
  } catch (err) {
    console.error(err);
  }
}

export { getAllMovies, createMovie, getOneMovie, updateOneMovie, deleteMovie };
