import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
  return (
    <Carousel className='CarouselMain'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/carouselstatic1.gif"
          alt="Imagen 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/carouselstatic3.svg"
          alt="Imagen 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/carouselstatic4.svg"
          alt="Imagen 3"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
