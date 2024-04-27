import React from "react";
import "./LandingPage.css";
import { Col, Container, Row } from "react-bootstrap";
import CarouselFadeExample from "../components/Swiper";
import { GrFormNextLink } from "react-icons/gr";
import { FiExternalLink } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const LandingPage = () => {
  // define useNavigate as navigate to navigate to the store page when continue shopping button is clicked
  const navigate = useNavigate();
  return (
    <Container fluid>
      <Row>
        <Col className="navbar"></Col>
      </Row>
      <Row>
        <Col>
          <p className="text-center hero-text">
            Start selling online. Open an online store with as little as $1.{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => navigate("infosection")}
            >
              Click for more Info...
              <FiExternalLink />
            </span>
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="hero-section">
          <div className="img-description">
            <h1>Kente</h1>
            <h4>Handwoven. Cultural Significance. Colors & Patterns.</h4>
            <p>
              Kente cloth originated from the Ashanti (Asante) people of Ghana,
              is often associated with special occasions and celebrations, such
              as weddings, festivals, and other ceremonies. It is worn by both
              men and women as clothing, scarves, or wraps.
            </p>
            <div className="links">
              <span>
                Learn more
                <GrFormNextLink />
              </span>{" "}
              <span onClick={() => navigate("/store")}>
                Buy from store
                <GrFormNextLink />
              </span>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="hero-pic2">
          <div className="img-description">
            <h1>Smock</h1>
            <h4>Originality. Decorations. Design & Fabric.</h4>
            <p>
              The Smock, also known as Batakari, is associated with the northern
              regions of Ghana, including the Northern Region, Upper East
              Region, and Upper West Region. Smocks are made from handwoven
              cotton or silk fabric and often decorated with intricate
              embroidery and symbols that convey cultural and personal meanings.
            </p>
            <div className="links">
              <span>
                Learn more
                <GrFormNextLink />
              </span>{" "}
              <span onClick={() => navigate("/store")}>
                Buy from store
                <GrFormNextLink />
              </span>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="hero-pic3">
          <div className="img-description">
            <h1>Kete</h1>
            <h4>International Recognition. Cultural Heritage.</h4>
            <p>
              Kete cloth is traditionally associated with the Akan people,
              primarily in the Ashanti and Akuapem regions of Ghana. Similar to
              Kente, Kete cloth patterns have specific meanings and convey
              messages. They often represent proverbs, historical events, or
              traditional beliefs.
            </p>
            <div className="links">
              <span>
                Learn more
                <GrFormNextLink />
              </span>{" "}
              <span onClick={() => navigate("/store")}>
                Buy from store
                <GrFormNextLink />
              </span>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6} xs={12}>
          <Col className="col-card landing-card1"></Col>
        </Col>
        <Col md={6} xs={12}>
          <Col className="col-card landing-card2"></Col>
        </Col>
      </Row>
      <Row>
        <Col md={6} xs={12}>
          <Col className="col-card landing-card3"></Col>
        </Col>
        <Col md={6} xs={12}>
          <Col className="col-card landing-card4 video-card"></Col>
        </Col>
      </Row>
      <Row>
        <Col md={6} xs={12}>
          <Col className="col-card landing-card5"></Col>
        </Col>
        <Col md={6} xs={12}>
          <Col className="col-card landing-card6"></Col>
        </Col>
      </Row>
      <Row>
        <Col>
          <CarouselFadeExample />
        </Col>
      </Row>
      <br />
      <hr />
      <Row>
        <Footer />
      </Row>
    </Container>
  );
};

export default LandingPage;
