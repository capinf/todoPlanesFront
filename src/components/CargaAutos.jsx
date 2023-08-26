import React from 'react'
import '../Css/formcss.css'
import { useState } from 'react';
import  {cargarFormulario}  from '../servicios/servicios';


export function CargaAutos () {

  const [mensajeError, setmensajeError] = useState('')
  const [MensajeSucces, setMensajeSucces] = useState('')
  const rolform = JSON.parse(localStorage.getItem('saveRol'))

  const [formData, setFormData] = useState({
    nombrePlan: '',
    tipoPlan: '',
    precio: '',
    cantidadCuotas: '',
    adjudicado: '',
    anioInicio: '',
    localidad: '',
    telefono: '',
    imgPath: null,
    rolform: rolform
  });


  const handleChange = (e) => {
    if (e.target.name === 'imgPath') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0]
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
    console.log('handleChange consolelog ',formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handlesubmit consolelog ',formData);
    try {
      if (formData.nombrePlan !=''&&
          formData.anioInicio !=''&&
          formData.cantidadCuotas !=''&&
          formData.localidad !=''&&
          formData.precio !=''&&
          formData.rolform == rolform&&
          formData.tipoPlan !=''&&
          formData.telefono !=''&&
          formData.adjudicado !='') {
        
        const response = await cargarFormulario(formData);
        console.log('Datos enviados al backend:', response);
        setMensajeSucces('Se cargo el formulario correctamente')
        setTimeout(()=>{
            setmensajeError('')
            window.location.reload(true);
        }, 3000)

      } else{
        setmensajeError('Por favor completa todos los campos')
            setTimeout(()=>{
                setmensajeError('')
            }, 3000)
      }

      // Reiniciar los valores de los campos después de enviar
      setFormData({
        nombrePlan: '',
        tipoPlan: '',
        precio: '',
        cantidadCuotas: '',
        adjudicado: '',
        anioInicio: '',
        localidad: '',
        telefono: '',
        imgPath: null,
        rolform: ''
      });
    } catch (error) {
      console.error('Error al enviar datos al backend:', error);
    }

    // Aquí puedes realizar las acciones necesarias con los datos del formulario
  };
    return (
        <>
        {
          mensajeError?
          <div className="alert alert-warning" role="alert">
           {mensajeError}
          </div>:''
        }
                {
          MensajeSucces?
          <div className="alert alert-warning" role="alert">
           {MensajeSucces}
          </div>:''
        }
       <form action="">
  <div className="container" >
    <div className="row justify-content-center" id="form">
      <div className="col-md-8">
        <h1 id="registro">Subí tu Plan</h1>
        <div className="styled-form" width = "60%">

          <div className="form-group">
            <input
              required
              type="text"
              className="form-control"
              id="nombrePlan"
              name="nombrePlan"
              value={formData.nombrePlan}
              onChange={handleChange}
            />
            <label htmlFor="nombrePlan" className="text">Nombre del Plan</label>
          </div>

          <div className="form-group">
          <label htmlFor="tipoPlan" className="text">
            <select
              placeholder='Seleccione tipo de plan'
              required
              type="text"
              className="form-control"
              id="tipoPlan"
              name="tipoPlan"
              value={formData.tipoPlan}
              onChange={handleChange}
              >
              <option value="">-</option>
              <option value="100%">100%</option>
              <option value="80% - 20%">80% - 20%</option>
              <option value="70% - 30%">70% - 30%</option>
            </select>
            Tipo de Plan</label>
          </div>

          <div className="form-group">
            <input
              required
              type="text"
              className="form-control"
              id="precio"
              name="precio"
              value={formData.precio}
              onChange={handleChange}
            />
            <label htmlFor="precio" className="text">Precio</label>
          </div>
          <div className="form-group">
            <input
              required
              type="number"
              className="form-control"
              id="cantidadCuotas"
              name="cantidadCuotas"
              value={formData.cantidadCuotas}
              onChange={handleChange}
            />
            <label htmlFor="carCondition" className="text">Cantidad de Cuotas Pagadas</label>
          </div>

          <div className="form-group">
          <label htmlFor="adjudicado" className="text">
            <select
              placeholder=''
              required
              type="text"
              className="form-control"
              id="adjudicado"
              name="adjudicado"
              value={formData.adjudicado}
              onChange={handleChange}
              >
              <option value="">-</option>
              <option value="SI">SI</option>
              <option value="NO">NO</option>
            </select>
            ¿Adjudicado?</label>
          </div>

          <div className="form-group">
            <input
              required
              type="text"
              className="form-control"
              id="anioInicio"
              name="anioInicio"
              value={formData.anioInicio}
              onChange={handleChange}
            />
            <label htmlFor="anioInicio" className="text">Año de Inicio</label>
          </div>
          <div className="form-group">
            <input
              required
              type="text"
              className="form-control"
              id="localidad"
              name="localidad"
              value={formData.localidad}
              onChange={handleChange}
            />
            <label htmlFor="localidad" className="text">Localidad</label>
          </div>
          <div className="form-group">
            <input
              required
              type="text"
              className="form-control"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
            <label htmlFor="telefono" className="text">Telefono</label>
          </div>
          <div className="form-group">
            <label htmlFor="imgPath" className="text">Subir imágenes</label>
            <input
              required
              type="file"
              className="form-control-file"
              id="imgPath"
              name="imgPath"
              accept="image/*"
              multiple
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit} className="btn btn-info">Enviar</button>
        </div>
      </div>
      <div width="500px" height = "400px">
      <img src="/img/hombrecitos.jpg" id='imagen-form' style={{ position: "relative", zIndex: 1 }}/>
      </div>
    
    </div>
    <footer id="futer">TodoPlanes</footer>
  </div>
</form>
        </>
    )
}

export default CargaAutos