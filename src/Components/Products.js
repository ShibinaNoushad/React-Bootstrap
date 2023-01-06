import React from "react";
import { Col, Row, Card, Container, Button } from "react-bootstrap";

const Data = [
  {
    title: "Album 1",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Album 2",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Album 3",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Album 4",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

function Products() {
  return (
    <>
      {Data?.map((elem) => (
        <Row className="d-flex justify-content-center align-items-center m-3  ">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={elem?.imageUrl} />
            <Card.Body className="d-flex justify-content-between">
              <h6> $ {elem?.price}</h6>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        </Row>
      ))}
    </>
  );
}

export default Products;