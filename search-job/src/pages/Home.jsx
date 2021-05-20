import React, { Component } from "react";
import DisplayResults from "../components/DisplayResults.jsx";
import {Container} from "react-bootstrap"
import {connect} from "react-redux"

const mapStateToProps = state => state

class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <Container className="text-center">
        <DisplayResults results={this.props.results}/>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(Home)