import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Store.css";
import Product from "./Product";
import Footer from "../components/Footer";
import paymentmethod from "../images/paymentmethod.png";
import laptop from "../images/laptop.png";
import fastdelivery from "../images/fastdelivery.png";
// import CarouselFadeExample from "../components/Swiper";
import CarouselFade from "../components/Carousel";
import shopping from "../images/shopping.jpg";
import sliderpicn1 from "../images/sliderpicn1.jpg";
import sliderpicn2 from "../images/sliderpicn2.jpg";

const Store = () => {
  return (
    <div>
    <Container fluid>
    <Row>
      <CarouselFade image1={shopping} image2={sliderpicn1} image3={sliderpicn2} height={"500px"} />
      </Row>
    </Container>
    <Container className="Store-container shop">
      
      <Row>
        <div className="Store-product">
          <Product />
        </div>
      </Row>
      <br />
      <Row>
        <Col>
          <Card style={{ width: "18rem" }} className="store-info-card">
            <Card.Body>
              <img src={laptop} alt="" style={{ paddingBottom: "15px" }} />
              <Card.Title>Shop Online</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }} className="store-info-card">
            <Card.Body>
              <img
                src={paymentmethod}
                alt=""
                style={{ paddingBottom: "15px" }}
              />
              <Card.Title>Choose Payment Method</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }} className="store-info-card">
            <Card.Body>
              <img
                src={fastdelivery}
                alt=""
                style={{ paddingBottom: "15px" }}
              />
              <Card.Title>Fast Delivery</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <hr />
      <Row>
        <Footer />
      </Row>
    </Container>
    </div>
  );
};

export default Store;
