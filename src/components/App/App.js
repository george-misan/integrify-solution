import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "../Home";
import UserDetail from "../UserDetail/UserDetail";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/users/:id" component={UserDetail} />
    </Router>
  );
}

export default App;
