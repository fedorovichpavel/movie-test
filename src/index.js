import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./preloader.scss";
import App from "./App";
import Preloader from "./components/Preloader";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Preloader />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
