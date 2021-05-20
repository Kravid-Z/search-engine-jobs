import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { toogleFavoritesAction } from "../redux/actions";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const mapStateToProps = (state) => state.favorites;

const CardResult = (props) => {
  console.log(props.favorites);
  let { company, company_logo, id, title } = props.result;
  console.log(props.favorites.every((e) => e.id !== props.favorites.id))
  return (
    <>
      <Card>
        <Card.Img variant="top" src={company_logo} />
        <Card.Body>
          <Card.Title>{company}</Card.Title>
          <Card.Text>{title}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={`/details/${id}`}>
            <Button variant="info">More details</Button>
          </Link>
          <Button
            onClick={() => props.toogleFavoritesAction(props.result)}
            variant="success"
          >
            {props.favorites.every((e) => e.id !== props.result.id) ? (
              <MdFavoriteBorder />
            ) : (
              <MdFavorite />
            )}
          </Button>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </>
  );
};

export default connect(mapStateToProps, { toogleFavoritesAction })(CardResult);
