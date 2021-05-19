import React from "react";
import { Card, Button } from "react-bootstrap";

export default function CardResult(props) {
  let { company, company_logo, id } = props.result;
  return (
    <>
      <Card>
        <Card.Img variant="top" src={{ company_logo }} />
        <Card.Body>
          <Card.Title>{company}</Card.Title>
          <Card.Text>Brief description job</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={`/${id}`}>
            <Button variant="info">More details</Button>
          </Link>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </>
  );
}
