import React, { useEffect } from 'react';
import $ from 'jquery';
import Swal from 'sweetalert2';

const Card = () => {
  useEffect(() => {
    $(document).ready(() => {
      // Al hacer clic en el botón de agregar tarjeta
      $('#add-card-button').on('click', () => {
        Swal.fire({
          title: 'Nueva Publicacion',
          html: `
            <form id="new-card-form">
              <div className="form-group">
                <label htmlFor="image-input">Imagen:</label>
                <input type="file" id="image-input" name="image" accept="image/*" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="description-input">Descripción:</label>
                <textarea id="description-input" name="description" placeholder="Descripción" className="form-control" required></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="value-input">Valor:</label>
                <input type="number" id="value-input" name="value" placeholder="Valor" className="form-control" required />
              </div>
            </form>
          `,
          showCancelButton: true,
          focusConfirm: false,
          preConfirm: () => {
            const image = $('#image-input').val();
            const description = $('#description-input').val();
            const value = $('#value-input').val();

            if (!image || !description || !value) {
              Swal.showValidationMessage('Por favor, complete todos los campos');
              return false;
            }

            // Clonar la tarjeta original
            const clonedCard = $('.card').first().clone();

            // Modificar la tarjeta clonada con los datos del formulario
            clonedCard.find('.card-img-top').attr('src', image);
            clonedCard.find('.card-title').text(description);
            clonedCard.find('.card-text').text('Valor: ' + value);

            // Agregar la tarjeta clonada al contenedor
            $('#container').append('<div className="col-md-3">' + clonedCard.prop('outerHTML') + '</div>');
          },
        });
      });
    });
  }, []);

  return (

    <>

<div className="row" id="container">
    <div className="col-md-3">
    <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
      </div>
    </div>
  </div>

  <button id="add-card-button">Agregar Card</button>

    <div>
      <button id="add-card-button">Agregar Tarjeta</button>
      <div id="card-container">
      </div>
    </div>
    </>
  );
};

export default Card;
