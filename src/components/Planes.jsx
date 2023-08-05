import React, {useState} from 'react';
import { Carousel } from 'react-bootstrap';


const Planes = () => {

    const [getForm, SetForm] = useState(false)
    const cargarCarrousel = () =>{
        SetForm(true);
    }

    const handleImageUpload = (newImage) => {
        // Agrega la nueva imagen al array de imágenes
        setImages([...images, newImage]);
      };
      


  return (

    <> 


    <Carousel className='CarouselMain'>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/infoplanes.svg"
          alt="https://www.freepik.es/vector-gratis/modern-blue-urban-adventure-suv-vehicle-illustration_1361484.htm#query=autos&position=40&from_view=search&track=sph"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/infoplanes2.svg"
          alt="Imagen 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/infoplanes3.svg"
          alt="Imagen 3"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/infoplanes4.svg"
          alt="Imagen 3"
        />
      </Carousel.Item>
    </Carousel>
    </>
  );
};

export default Planes;
