import axios from "axios";

export const getPosts = () =>
  axios.get("https://api.tvmaze.com/search/shows?q=batman");
