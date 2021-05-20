import React from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Spinner, Container } from "react-bootstrap";

export default function DisplayDetailsJob(props) {
  console.log(props.jobDetails, "THIS ARE DETAILS JOB");
  return (
    <>
      {!props.jobDetails ? (
        <Container className="my-5 text-center justify-content-center">
          <span className="px-3 font-italic text-monospace">
            Please wait a second we're working for you.
          </span>
          <Spinner className="mx-2" animation="grow" variant="secondary" />
          <Spinner className="mx-2" animation="grow" variant="secondary" />
        </Container>
      ) : (
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>{props.jobDetails.company}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <h3>Deatils</h3>
            <img
              style={{ width: "400px" }}
              src={props.jobDetails.company_logo}
              alt="companylogo"
            />
            <div
              dangerouslySetInnerHTML={{ __html: props.jobDetails.description }}
            />
            <h3>How to Apply?</h3>
            <div
              className="text-truncate"
              dangerouslySetInnerHTML={{
                __html: props.jobDetails.how_to_apply,
              }}
            />
          </Modal.Body>

          <Modal.Footer>
            <Link to={`/`}>
              <Button variant="secondary">Return Home</Button>
            </Link>
            {/* <Button variant="primary">Save changes</Button> */}
          </Modal.Footer>
        </Modal.Dialog>
      )}
    </>
  );
}
