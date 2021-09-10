import axios from "axios";

export const api = {
  base: axios.create({
    baseURL: `https://www.omdbapi.com`,
  }),

  getMovies(s, page) {
    return this.base.get(
      `/?i=tt3896198&apikey=8523cbb8${s ? `&s=${s}` : ""}${
        page ? `&page=${page}` : ""
      }`
    );
  },
};
