import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
  return (
    <Carousel className='CarouselMain'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/carouselstatic1.gif"
          alt="Imagen de azerbaijan_stockers en Freepik"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/carouselstatic2.gif"
          alt="Imagen de standret en Freepik"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/carouselstatic3.gif"
          alt="Imagen de prostooleh en Freepik"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
