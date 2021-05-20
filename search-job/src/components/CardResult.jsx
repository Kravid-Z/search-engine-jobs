import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import {
  addToFavoritesAction,
  removeFromFavoritesAction,
} from "../redux/actions";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

// MdFavorite, MdFavoriteBorder

const mapStateToProps = (state) => state;

const CardResult = (props) => {
  let { company, company_logo, id } = props.result;
  return (
    <>
      <Card>
        <Card.Img variant="top" src={company_logo} />
        <Card.Body>
          <Card.Title>{company}</Card.Title>
          <Card.Text>Brief description job</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={`/details/${id}`}>
            <Button variant="info">More details</Button>
          </Link>
          <Button
            onClick={() => props.addToFavoritesAction(props.result)}
            variant="success"
          >
            <MdFavorite /> <MdFavoriteBorder />
          </Button>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </>
  );
};

export default connect(null, { addToFavoritesAction })(CardResult);
