import React from "react";
import Carousel from "react-bootstrap/Carousel";
import blackstars1 from "../images/blackstars1.jpeg";
import blackstars2 from "../images/blackstars2.jpeg";
import kidsclothed from "../images/kidsclothed.jpeg";

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={blackstars1} alt="" width={"100%"} height={"500px"} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={kidsclothed} alt="" width={"100%"} height={"500px"} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={blackstars2} alt="" width={"100%"} height={"500px"} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
