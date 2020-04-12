import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import UserProvider from "./context/UserProvider";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <UserProvider>
      <App />
    </UserProvider>
  </Router>,
  document.querySelector("#root")
);
