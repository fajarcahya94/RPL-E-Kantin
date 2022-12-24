import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";

const Cards = ({ item, handleClick }) => {
  const { nama, harga, img, des } = item;

  return (
    <div className="mb-5">
      <Container>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{nama}</Card.Title>
            <Card.Subtitle className="mb-2">{harga}</Card.Subtitle>
            <Card.Text>{des}</Card.Text>
            <Button onClick={() => handleClick(item)} variant="dark">
              Pesan
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Cards;
