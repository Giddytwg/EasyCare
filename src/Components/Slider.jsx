import Slider from "react-slick";
import PropTypes from "prop-types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
  

export default function NewSlider() {
const products = [1,2,3,4,5]
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    swipeToSlide: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <h1>dddd</h1>
        <h1>dddd</h1>
        <h1>dddd</h1>
      </div>
    </Slider>
  );
}

NewSlider.propTypes ={
    slidesNo: PropTypes.number,
    products: PropTypes.array
}