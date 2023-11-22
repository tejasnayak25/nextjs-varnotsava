"use client";

import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  useEffect(() => {
    // Importing react-slick styles on the client side
    import('slick-carousel/slick/slick.css');
    import('slick-carousel/slick/slick-theme.css');
  }, []);

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
      { image: "/images/college/image1.jpeg" },
      { image: "/images/college/image2.jpeg" },
      { image: "/images/college/image3.jpeg" },
      { image: "/images/college/image4.jpeg" },
    ];

    for (let item of list) {
      code.push(
        <div key={item.image}>
          <img src={item.image} className="w-full" alt="..." />
        </div>
      );
    }

    return code;
  }

  return (
    <Slider {...settings}>
      {getSlides()}
    </Slider>
  );
};

export default Carousel;
