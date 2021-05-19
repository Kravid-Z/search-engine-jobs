import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import DetailsJob from "./pages/DetailsJob.jsx";
import SearchBar from "../src/components/SearchBar.jsx";
import { Component } from "react";

export default class App extends Component {
  state = {
    results : []
  };
  getResults = (usersearch) => {
    this.set.state({results: usersearch})
  }
  render() {
    return (
      <Router>
        <SearchBar getResults={this.getResults} />
        <Route
          path="/"
          exact
          render={(routerProps) => <Home {...routerProps} results={this.state.results} />}
        />
        <Route
          path="/details"
          exact
          render={(routerProps) => <DetailsJob {...routerProps} />}
        />
      </Router>
    );
  }
}
