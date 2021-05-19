import React, { Component } from "react";
import {
  Navbar,
  Form,
  Button,
  Jumbotron,
  Container,
  FormControl,
} from "react-bootstrap";
// import {
//     fetchUserSearch,
// } from "../redux/asyncActions.js";

export default class SearchBar extends Component {
  state = {
    inputLocation: "",
    inputDesiredPosition: "",
  };

  updateInput = (e) => {
    let id = e.target.id;
    this.setState({
      ...this.state,
      [id]: e.target.value,
    });
  };

  handleSearch = async (e) => {
    e.preventDefault();
    if ((this.state.inputDesiredPosition && this.state.inputLocation) !== "") {
      try {
        let description = this.state.inputDesiredPosition;
        let location = this.state.inputLocation;
        const response = await fetch(
          `https://strive-proxy.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&location=${location}`
        );
        const results = await response.json();
        this.props.getResults({ results });
      } catch (error) {
        window.alert("Sorry something wrong with the fetch");
      }
    } else {
      window.alert("Please add location and position before search");
    }
  };

  render() {
    return (
      <>
        <Jumbotron fluid className="my-0">
          <Container className="px-0">
            <h1>NomadJobs!</h1>
            <p>Find the JOB you want.</p>
            <p>
              <Button variant="primary">Subscribe to our newsletter Job</Button>
            </p>
          </Container>
        </Jumbotron>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">NomadJobs!</Navbar.Brand>
          <Form inline onSubmit={this.handleSearch()}>
            <FormControl
              id="location"
              style={{ minWidth: "30vw" }}
              type="text"
              placeholder="Location"
              onChange={this.updateInput}
              value={this.state.inputLocation}
              className="mr-sm-2"
            />
            <FormControl
              id="position"
              style={{ minWidth: "30vw" }}
              type="text"
              placeholder="Desired position"
              onChange={this.updateInput}
              value={this.state.inputDesiredPosition}
              className="mr-sm-2"
            />
            <Button type="submit" variant="outline-info">
              Search
            </Button>
          </Form>
        </Navbar>
      </>
    );
  }
}
