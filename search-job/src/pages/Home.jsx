import React, { Component } from "react";
import DisplayResults from "../components/DisplayResults.jsx";
import {Container} from "react-bootstrap"
export default class Home extends Component {
  render() {
    return (
      <Container className="mx-3">
        <DisplayResults results={this.props.results}/>
      </Container>
    );
  }
}
