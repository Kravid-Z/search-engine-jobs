import React, { Component } from "react";
import { Navbar, Form, Button, Jumbotron, Container } from "react-bootstrap";
// import {
//     fetchUserSearch,
// } from "../redux/asyncActions.js";

export default class SearchBar extends Component {
  state = {
    location: "",
    position: "",
  };

  updateInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    // let id = e.target.id;
    // this.setState({
    //   ...this.state,
    //   [id]: e.target.value,
    // });
  };

  handleSearch = async (e) => {
    e.preventDefault();
    if (this.state.position && this.state.location) {
      try {
        let description = this.state.position;
        let location = this.state.location;
        const response = await fetch(
          `https://strive-proxy.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&location=${location}`
        );
        const results = await response.json();
        this.props.getResults(results);
      } catch (error) {
        console.log(error)
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
          <Form inline onSubmit={this.handleSearch}>
            <Form.Control
              name="location"
              style={{ minWidth: "30vw" }}
              type="search"
              placeholder="Location"
              onChange={this.updateInput}
              className="mr-sm-2"
            />
            <Form.Control
              name="position"
              style={{ minWidth: "30vw" }}
              type="search"
              placeholder="Desired position"
              onChange={this.updateInput}
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
