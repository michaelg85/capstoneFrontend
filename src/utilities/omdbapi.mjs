import axios from "axios";

const key = axios.create({
    

    baseURL: "http://www.omdbapi.com/",
    params: {
        apiKey: key,
    },
});

export default key;
