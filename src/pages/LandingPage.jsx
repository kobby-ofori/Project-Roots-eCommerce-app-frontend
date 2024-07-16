import React from "react";
import "./LandingPage.css";
import { Col, Container, Row } from "react-bootstrap";
import CarouselFadeExample from "../components/Swiper";
import { GrFormNextLink } from "react-icons/gr";
import { FiExternalLink } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const LandingPage = () => {
  // define useNavigate as navigate to navigate to the store page when continue shopping button is clicked
  const navigate = useNavigate();
  //settings for slick slider
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container fluid>
      {/* First row: navbar */}
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
      <br />
      {/* Carousel row */}
      <Row>
        <Col className="carousel-column">
          <CarouselFadeExample />
        </Col>
        {/* First Ads cards row */}
        <div className="carousel-cards Ads-cards">
          <div>
            <h5>Top Deal</h5>
          </div>
          <div>
            <h5>Deals in Fabrics</h5>
            <img
              src={require("../images/kente3.jpeg")}
              alt=""
              className="Ads-card-img"
            />
          </div>
          <div>
            <h5>Choose from Variety</h5>
            <img
              src={require("../images/kente4.jpg")}
              alt=""
              className="Ads-card-img"
            />
          </div>
          <div>
            <h5>Traditional Fit</h5>
            <img
              src={require("../images/clothedpeople2.jpg")}
              alt=""
              className="Ads-card-img"
            />
          </div>
        </div>
        {/* Ads cards for other media screens */}
        <div className="custom-slider-cards media-query-slider">
          <Slider {...settings}>
            <div className="media-query-div">
              <h5>Top Deal</h5>
            </div>
            <div className="media-query-div2">
              <h5>Deals in Fabrics</h5>
            </div>
            <div className="media-query-div3">
              <h5>Choose from Variety</h5>
            </div>
            <div className="media-query-div4">
              <h5>Traditional Fit</h5>
            </div>
            <div className="media-query-div5">
              <h5>Men</h5>
            </div>
            <div className="media-query-div6">
              <h5>Women</h5>
            </div>
            <div className="media-query-div7">
              <h5>Children</h5>
            </div>
            <div className="media-query-div8">
              <h5>Discount</h5>
            </div>
          </Slider>
        </div>
      </Row>
      {/* Second Ads cards row */}
      <Row>
        <Col className="Ads-cards alternative">
          <div>
            <h5>Men</h5>
            <img
              src={require("../images/Ankara.jpeg")}
              alt=""
              className="Ads-card-img"
            />
          </div>
          <div>
            <h5>Women</h5>
            <img
              src={require("../images/Ankara.jpeg")}
              alt=""
              className="Ads-card-img"
            />
          </div>
          <div>
            <h5>Children</h5>
            <img
              src={require("../images/kenteChild.jpg")}
              alt=""
              className="Ads-card-img"
            />
          </div>
          <div>
            <h5>Discount</h5>
            <img
              src={require("../images/Ankara.jpeg")}
              alt=""
              className="Ads-card-img"
            />
          </div>
        </Col>
      </Row>

      <Row>
        <Col data-aos="fade-up" className="hero-section hero-pic1">
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
        <div className="custom-slider-cards">
          <Slider {...settings}>
            <div>
              <h5>Men</h5>
            </div>
            <div>
              <h5>Women</h5>
            </div>
            <div>
              <h5>Children</h5>
            </div>
            <div>
              <h5>Discount</h5>
            </div>
          </Slider>
        </div>
      </Row>
      <br />
      <Row>
        <Col data-aos="fade-up" className="hero-section hero-pic2">
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
        <Col data-aos="fade-right" className="hero-section hero-pic3">
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
        <Col md={6} sm={6} xs={6}>
          <Col className="col-card landing-card1"></Col>
        </Col>
        <Col md={6} sm={6} xs={6}>
          <Col className="col-card landing-card2"></Col>
        </Col>
      </Row>
      <Row>
        <Col md={6} sm={6} xs={6}>
          <Col className="col-card landing-card3"></Col>
        </Col>
        <Col md={6} sm={6} xs={6}>
          <Col className="col-card landing-card4 video-card"></Col>
        </Col>
      </Row>
      <Row>
        <Col md={6} sm={6} xs={6}>
          <Col className="col-card landing-card5"></Col>
        </Col>
        <Col md={6} sm={6} xs={6}>
          <Col className="col-card landing-card6"></Col>
        </Col>
      </Row>
      <hr />
      <Row>
        <Footer />
      </Row>
    </Container>
  );
};

export default LandingPage;
