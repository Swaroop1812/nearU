import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/auto_hero-slider1.css";

const HeroSlider1 = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider1">
      <div className="slider__item slider__item-011 mt0">
        <Container>
          <div className="slider__content1 ">
            <h1 className="text-light mb-4">Book Now and Get 20% Off</h1>

            <button className="btn reserve__btn1 mt-4">
              <Link to="/cars">Book Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item1 slider__item-021 mt0">
        <Container>
          <div className="slider__content1 ">
            <h1 className="text-light1 mb-4">Book Now and Get 30% Off</h1>

            <button className="btn reserve__btn1 mt-4">
              <Link to="/cars">Book Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item1 slider__item-031 mt0">
        <Container>
          <div className="slider__content1 ">
            <h1 className="text-light1 mb-4">Book Now and Get 35% Off</h1>

            <button className="btn reserve__btn1 mt-4">
              <Link to="/cars">Book Now</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider1;
