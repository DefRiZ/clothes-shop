import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./SliderItem.scss";

import firstSlide from "../../img/slider/1-slide.jpg";
import secondSlide from "../../img/slider/2-slide.jpg";
import thirdSlide from "../../img/slider/3-slide.jpg";
import leftArow from "../../img/slider/left-arrow.svg";
import rightArow from "../../img/slider/right-arrow.svg";

const slides = [firstSlide, secondSlide, thirdSlide];

function NextextArrow(props) {
  const { onClick, style, className } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <img src={rightArow} alt="Next" />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick, style, className } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <img src={leftArow} alt="Prev" />
    </div>
  );
}

const settings = {
  dots: true,
  dotsClass: "dots",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextextArrow />,
  prevArrow: <PrevArrow />,
};

const SliderItem = () => {
  return (
    <div className="container">
      <Slider {...settings}>
        {slides.map((el, i) => (
          <div className="cart">
            <img className="image" alt="slide" src={el} key={i} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderItem;
