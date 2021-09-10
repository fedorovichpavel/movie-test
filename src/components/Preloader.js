import React from "react";
import "../preloader.scss";

const Preloader = () => {
  return (
    <div className="spinner">
      <div className="blob blob-0"></div>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      <div className="blob blob-4"></div>
      <div className="blob blob-5"></div>
    </div>
  );
};

export default Preloader;

export const MiniPreloader = () => {
  return (
    <div className="load-wrapp">
      <div className="load">
        <p>Loading...</p>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};
