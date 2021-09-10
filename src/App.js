import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { Context } from "./context";

const App = () => {
  const [movieObj, setMovieObj] = useState({ s: null, page: null });

  const setMovieOpt = (obj) => {
    setMovieObj(obj);
  };

  return (
    <Context.Provider value={{ setMovieOpt, movieObj }}>
      <div className="wrapper">
        <Header />
        <Main movieObj={movieObj} />
      </div>
    </Context.Provider>
  );
};

export default App;
