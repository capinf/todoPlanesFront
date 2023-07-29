<<<<<<< HEAD
import { useState, useEffect } from 'react'
import '../Css/GridAutos.css'
import * as API from '../servicios/servicios'

export function PlanNormal () {

    const [ planesNormal, setPlanesNormal ] = useState([])

    useEffect(() =>{
        API.getPlanesAPInormal().then(setPlanesNormal)
    }, [])

    return (
        <>
        <div className='Card'>
      <div className='carta-autos'>
        <ul className='gridAutos'>
        {
        planesNormal.map(plan =>(

            <li className='card-list-normal' key={plan.id}>
            <img className='card-image' src={plan.img} alt="" />
            <h1 className='title'>{plan.nombrePlan}</h1>
            <div className="card-details">
            <p className='infos'>Tipo de Plan: {plan.tipoPlan}</p>
            <p className='infos'>Precio: {plan.precio}</p>
            <p className='infos'>Cuotas pagadas: {plan.cantidadCuotas}</p>
            <p className='infos'>¿Adjudicado?: {plan.adjudicado}</p>
            <p className='infos'>Localidad: {plan.localidad}</p>
            <p className='infos'>Año de Inicio: {plan.anioInicio}</p>
            <p className='infos'>{plan.telefono}</p>
            {/* <button className='buttoncito'><img src="/img/buttoncito.png" alt="boton de contacto" width="100px" height="100px" /></button>
            <button className='whatsapplogo'><img src="/img/whatsappfree.png" alt="" width="100px" height="100px" /></button> */}
            </div>
            </li>
        ))
         }
        </ul>
      </div>
        </div>
        </>
    )
=======
import { useState, useEffect } from 'react'
import '../Css/GridAutos.css'
import * as API from '../servicios/servicios'

export function PlanNormal () {

    const [ planesNormal, setPlanesNormal ] = useState([])

    useEffect(() =>{
        API.getPlanesAPInormal().then(setPlanesNormal)
    }, [])

    return (
        <>
        <div className='Card'>
      <div className='carta-autos'>
        <ul className='gridAutos'>
        {
        planesNormal.map(plan =>(

            <li className='card-list-normal' key={plan.id}>
            <img className='card-image' src={plan.img} alt="" />
            <h1 className='title'>{plan.nombrePlan}</h1>
            <div className="card-details">
            <p className='infos'>Tipo de Plan: {plan.tipoPlan}</p>
            <p className='infos'>Precio: {plan.precio}</p>
            <p className='infos'>Cuotas pagadas: {plan.cantidadCuotas}</p>
            <p className='infos'>¿Adjudicado?: {plan.adjudicado}</p>
            <p className='infos'>Localidad: {plan.localidad}</p>
            <p className='infos'>Año de Inicio: {plan.anioInicio}</p>
            <p className='infos'>{plan.telefono}</p>
            {/* <button className='buttoncito'><img src="/img/buttoncito.png" alt="boton de contacto" width="100px" height="100px" /></button>
            <button className='whatsapplogo'><img src="/img/whatsappfree.png" alt="" width="100px" height="100px" /></button> */}
            </div>
            </li>
        ))
         }
        </ul>
      </div>
        </div>
        </>
    )
>>>>>>> d2c27700623fa611e6e92664d0c91dbf58fc1a72
}