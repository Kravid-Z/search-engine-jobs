import React from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

export default function DisplayDetailsJob(props) {
  return (
    <>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{props.jobDetails.company}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h3>Deatils</h3>
          <img src={props.jobDetails.company_logo} alt="companylogo" />
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
    </>
  );
}
