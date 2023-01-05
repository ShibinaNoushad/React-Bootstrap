import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Row, Col, Card } from "react-bootstrap";
function Footer() {
  return (
    <div>
      <Container fluid="100" className="mt-1 ">
        <Row>
          <Col>
            <Card style={{ backgroundColor: "deepskyblue", height: "5rem" }}>
              <Card.Text
                className="mx-auto"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "Metal Mania",
                }}
              >
                <h1>The Generics</h1>
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
