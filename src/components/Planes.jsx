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
          src="https://www.autosencuotas.com.ar/hotsale/img/hotweek/autoplan-peugeot-208-active-5-puertas-plan-ahorro-100-porciento-financiado.jpg"
          alt="Imagen 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.autosencuotas.com.ar/img/slider/index/bn-4.jpg"
          alt="Imagen 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.autosencuotas.com.ar/img/slider/index/inverti-en-planes-planes-a-la-venta-oferta.jpg"
          alt="Imagen 3"
        />
      </Carousel.Item>
    </Carousel>
    </>
  );
};

export default Planes;
