import React from "react";
import { Row, CardGroup } from "react-bootstrap";
import CardResult from "./CardResult.jsx";

export default function DisplayResults(props) {
  return (
    <>
      <Row>
        {props.results ? (
          <h2>Results</h2>
        ) : (
          <h2>Where to start? Try juniorFrontend in China</h2>
        )}
        <CardGroup>
          {props.results.map((result) => (
            <CardResult key={result.id} result={result} />
          ))}
        </CardGroup>
      </Row>
    </>
  );
}
