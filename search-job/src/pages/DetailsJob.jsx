import React, { Component } from "react";
import DisplayDetailsJob from "../components/DisplayDetailsJob.jsx"

export class DetailsJob extends Component {
  state = {
    jobDetails: null,
  };

  componentDidMount() {
    this.getJobDetails();
  }
  componentDidUpdate(){

  }

  getJobDetails = async () => {
    const response = await fetch(
      `https://strive-proxy.herokuapp.com/https://jobs.github.com/positions/${this.props.match.params.jobId}.json`
    );
    const data = await response.json();
    console.log(data)

    this.setState({ jobDetails: data });
  };

  render() {
    return (
      <>
      <DisplayDetailsJob jobDetails={this.state.jobDetails}/>
      </>
    );
  }
}

export default DetailsJob;
