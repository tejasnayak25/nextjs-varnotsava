import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  function getSlides() {
    let code = [];
    let list = [
        {
            image: "/images/college/image1.jpeg"
        },
        {
            image: "/images/college/image2.jpeg"
        },
        {
            image: "/images/college/image3.jpeg"
        },
        {
            image: "/images/college/image4.jpeg"
        }
    ]
    for(let item of list) {
        code.push(<div className=" duration-700 ease-in-out" data-carousel-item="active">
            <img src={item.image} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
        </div>);
    }

    return code;
}

  return (
    <Slider {...settings}>
      {getSlides()}
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default Carousel;