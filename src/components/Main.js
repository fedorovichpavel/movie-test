import { useEffect, useState } from "react";
import { api } from "../api";
import Card from "./Card";
import { MiniPreloader } from "./Preloader";
import Pagination from "./Pagination";

const Main = ({ movieObj }) => {
  const [movies, setMovies] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const getMovies = (s = null, page = null) => {
    setMovies(null);
    api.getMovies(s, page).then((res) => {
      if (res.status) {
        setMovies((prv) => res.data);
      }
    });
  };

  useEffect(() => {
    getMovies(movieObj.s, movieObj.page);
  }, [movieObj]);

  useEffect(() => {
    if (currentPage !== 1) setCurrentPage(1);
  }, [movieObj.s]);

  return (
    <main>
      <div className="main_search_result">
        {movies && (
          <span style={movies.totalResults ? { opacity: 1 } : { opacity: 0 }}>
            You searched for: {movieObj.s}, {movies.totalResults} results found
          </span>
        )}
      </div>
      <div className="main_cards">
        {movies ? (
          movies.Response === "True" ? (
            movies.Search ? (
              movies.Search.map((e, i) => <Card movie={e} key={e.Title + i} />)
            ) : (
              Array(8)
                .fill(movies)
                .map((e, i) => <Card movie={e} key={e.Title + i} />)
            )
          ) : (
            <span className="main_movie_error">{movies.Error} :(</span>
          )
        ) : (
          <MiniPreloader />
        )}
      </div>
      <div className="pagination_wrapper">
        {movies && (
          <Pagination
            pages={movies.totalResults || (movies.Error ? 0 : 100)}
            getMovies={getMovies}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </main>
  );
};

export default Main;
