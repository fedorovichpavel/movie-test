import { useState, useContext, useEffect } from "react";
import { Context } from "../context";

const Search = () => {
  const [text, setText] = useState("");
  const { setMovieOpt, movieObj } = useContext(Context);

  useEffect(() => {});

  const onChange = (e) => {
    setText(e.target.value);
    setMovieOpt({ movieObj, s: e.target.value });
  };

  return (
    <div className="search">
      <input type="text" value={text} onChange={onChange} />
    </div>
  );
};

export default Search;
