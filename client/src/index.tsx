import React from "react";
import { render } from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { User } from "./components";
import * as serviceWorker from "./serviceWorker";

const client = new ApolloClient({
  uri: "/api",
});

render(
  <ApolloProvider client={client}>
    <User title="Anime searching section" />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
