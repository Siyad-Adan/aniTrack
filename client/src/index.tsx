import React from "react";
import { render } from "react-dom";
import { User } from "./components";
import * as serviceWorker from "./serviceWorker";

render(
  <User title="Anime searching section">Weeb</User>,
  document.getElementById("root"),
  () => {
    console.log("Re-rendered");
  }
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
