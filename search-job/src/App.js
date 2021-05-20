import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import DetailsJob from "./pages/DetailsJob.jsx";
import SearchBar from "../src/components/SearchBar.jsx";
import { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <Router>
        <SearchBar />
        <Route
          path="/"
          exact
          render={(routerProps) => <Home {...routerProps} />}
        />
        <Route
          path="/details/:jobId"
          exact
          render={(routerProps) => <DetailsJob {...routerProps} />}
        />
      </Router>
    );
  }
}
