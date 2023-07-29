import React, { useState } from "react"
import '../Css/QuieroVenderPlan.css'

export function CargaPlan() {

  // const [datosPlan, setDatosPlan] = useState('')

  //Forma NO CONTROLADA por REAC (Solo JS)
  
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   const  datosplan  = Object.fromEntries(new window.FormData(event.target))
  //   console.log( datosplan )
  // }


  //Forma controlada por React

  // const handleChange = (e) => {
  //   setDatosPlan({ ...datosPlan, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const DatosForm = JSON.stringify(datosPlan);
  //   console.log(DatosForm);
  // };


    return (
      <>
  <div className="rectangle-19">
  <div className="rectangle-192">

  <img className="image-1" src="/img/hombrecitopensante.png" />

  <div className="c-mo-vender-mi-plan">¿Cómo vender mi plan?</div>

  <div className="qu-planes-puedo-vender">¿Qué Planes puedo vender?</div>

  <div className="a-qu-precio-puedo-vender-mi-plan">
    ¿A qué precio puedo vender mi plan?
  </div>

  <div
    className="solicitar-al-concensionario-oficial-de-la-marca-del-plan-el-formulario-para-ceder-dicho-plan"
  >
    Solicitar al concensionario oficial de la marca del plan el formulario para
    ceder dicho plan.
  </div>

  <div
    className="el-valor-del-plan-es-un-precio-fijado-en-com-n-acuerdo-entre-la-parte-vendedora-y-la-parte-compradora-en-base-al-calculo-de-cuotas-pagas"
  >
    El valor del plan es un precio fijado en común acuerdo entre la parte
    vendedora y la parte compradora, en base al calculo de cuotas pagas.
  </div>

  <div
    className="planes-de-todas-las-marcas-planes-al-d-a-planes-cancelados-planes-atrasados-en-mora-planes-100-80-20-70-30-y-60-40"
  >
    Planes de todas las marcas<br />Planes al día<br />Planes cancelados<br />Planes
    atrasados en mora<br />Planes 100%, 80/20, 70/30 y 60/40
  </div>

  <div className="contacto-clientemain-gmail-com">
    Contacto: clientemain@gmail.com
  </div>

  </div>
</div>

      {/* <div classNameName="CardCargarPlan">
      <h1 classNameName="titulazo">Datos del Plan a Vender</h1>
      <form classNameName="formularioPlan" onSubmit={handleSubmit}>
      <p>Nombre del Plan</p>
      <input required name="Plan" type="text" onChange={handleChange}/>
      <p>Cuotas Faltantes</p>
      <input required name="Cuotas" type="number" onChange={handleChange} />
      <p>Marca y Modelo</p>
      <input required  name="MarcaYmodelo" type="text" onChange={handleChange} />
      <p>Descripcion</p>
      <textarea required  name="Descripcion" type="text" onChange={handleChange} />
      <button type="submit" >Guardar Plan</button>
      </form>
      </div> */}
      </>
    )
  }