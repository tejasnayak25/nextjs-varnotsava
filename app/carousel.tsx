"use client";

import React, { useState } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/images/events/image1.jpeg",
    "/images/events/image2.jpeg",
    "/images/events/image3.jpeg",
    "/images/events/image4.jpeg",
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1));
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out transform translate-x-full" style={{ width: `${slides.length * 100}%`, transform: `translateX(-${currentSlide * (100 / slides.length)}%)` }}>
          {slides.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img src={image} alt={`Slide ${index + 1}`} className="w-full max-h-96 object-cover aspect-video" />
            </div>
          ))}
        </div>
      </div>

      <button onClick={prevSlide} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        &lt;
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        &gt;
      </button>
    </div>
  );
};

export default Carousel;