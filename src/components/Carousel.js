import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";

function CarouselFade(props) {
  // Accept carouselItems as a prop
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={props.image1} alt="" className="carousel-pic" />
        <Carousel.Caption style={{ color: "yellowgreen" }}>
          <h3>{props.carouselCaption1}</h3>
          <p>{props.carouselDescription1}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={props.image2} alt="" className="carousel-pic" />
        <Carousel.Caption style={{ color: "yellowgreen" }}>
          <h3>{props.carouselCaption2}</h3>
          <p>{props.carouselDescription2}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={props.image3} alt="" className="carousel-pic" />
        <Carousel.Caption style={{ color: "yellowgreen" }}>
          <h3>{props.carouselCaption3}</h3>
          <p>{props.carouselDescription3}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;
