import React from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselFade(props) { // Accept carouselItems as a prop
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={props.image1} alt="" width={"100%"} height={props.height} />
        <Carousel.Caption style={{color:'yellowgreen'}}>
          <h3>Online market</h3>
          <p>Shop authentic Ghanaian fabrics and attire online now!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={props.image2} alt="" width={"100%"} height={props.height} />
        <Carousel.Caption style={{color:'yellowgreen'}}>
          <h3>Accessibility & Distribution</h3>
          <p>Increase business agility and global reach!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={props.image3} alt="" width={"100%"} height={props.height} />
        <Carousel.Caption style={{color:'yellowgreen'}}>
          <h3>Vendors</h3>
          <p>
            Post products whenever & whereever!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;
