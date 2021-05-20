import React from "react";
import { Row, CardDeck, Spinner, Container } from "react-bootstrap";
import CardResult from "./CardResult.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

function DisplayResults(props) {
  console.log("STATE IN DISPLAY RESULTS", props);
  console.log(props.searchReducer.loading, "AAAAAAAAAAAA");

  return (
    <>
      <Row>
        {props.searchReducer.results.length > 0 ? (
          <h2 className="py-3 font-weight-bold text-monospace">Results</h2>
        ) : (
          <h2 className="py-3 font-weight-bold text-monospace">
            Where to start? Try juniorFrontend in China
          </h2>
        )}
        {props.searchReducer.loading ? (
          <Container className="text-center justify-content-center">
            <span className="px-3 font-italic text-monospace">Searching</span>
            <Spinner className="mx-2" animation="grow" variant="secondary" />
            <Spinner className="mx-2" animation="grow" variant="secondary" />
            <Spinner className="mx-2" animation="grow" variant="secondary" />
            <Spinner className="mx-2" animation="grow" variant="secondary" />
          </Container>
        ) : (
          <CardDeck>
            {props.searchReducer.results.map((result) => (
              <CardResult key={result.id} result={result} />
            ))}
          </CardDeck>
        )}
      </Row>
    </>
  );
}

export default connect(mapStateToProps)(DisplayResults);
