import React, { Component } from "react";
import { Navbar, Form, Button, Jumbotron, Container } from "react-bootstrap";
import "../index.css";
import { FaLocationArrow } from "react-icons/fa";
import { connect } from "react-redux";
import {
    fetchUserSearch,
} from "../redux/asyncActions.js";

const mapStateToProps = state => state

 class SearchBar extends Component {
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
      this.props.fetchUserSearch(this.state.location, this.state.position)
    //   try {
    //     let description = this.state.position;
    //     let location = this.state.location;
    //     const response = await fetch(
    //       `https://strive-proxy.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&location=${location}`
    //     );
    //     const results = await response.json();
    //     this.props.getResults(results);
    //   } catch (error) {
    //     console.log(error);
    //     window.alert("Sorry something wrong with the fetch");
    //   }
    // } else {
    //   window.alert("Please add location and position before search");
    // }
  }}

  render() {
    return (
      <>
        <Jumbotron fluid className="my-0 niceImage hero">
          <Container className="px-0">
            <h1 className="font-weight-bold text-monospace">NomadJobs!</h1>
            <p className="font-weight-bold text-monospace">
              Find the JOB you want{" "}
              <FaLocationArrow style={{ color: " #17A2B8" }} />{" "}
              <Button
                variant="outline-info"
                className="font-weight-bold text-monospace"
              >
                Subscribe to our newsletter Job
              </Button>
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

export default connect(mapStateToProps, {fetchUserSearch})(SearchBar);