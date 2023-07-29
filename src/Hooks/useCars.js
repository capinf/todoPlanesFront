import withResults from '../datatest/withresults.json'
import withoutresults from '../datatest/withoutresults.json'
import { useState } from 'react'
import * as API from '../servicios/servicios'

export function useCars ({ search }) {
    const [responseCars, setResponseCars] = useState([])
    
    const planes = responseCars

    const mappedCars = planes?.map(car =>({
        id: car.idFormulario,
        title: car.nombrePlan,
        tipoPlan: car.tipoPlan,
        precio: car.precio,
        cuotas: car.cantidadCuotas,
        adjudicado: car.adjudicado,
        anio: car.anioInicio,
        localidad: car.localidad,
        telefono: car.telefono,
        img: car.imgPath
    }))

    const getCars = async () => {
        
        if (search) { 
            console.log('console log dentro del if en useCars.js, valor del search:', search)
            //HACER ACÄ EL LLAMADO AL ENDPOINT -> SERVICIOS.JS -> BACKEND -> GET CONSULTA
            // setResponseCars(getAutosAPI())
            const planes = await API.getPlanesAPI(search)
            setResponseCars(planes)

        }else{
            setResponseCars(withoutresults)
        }
    }

    return {cars: mappedCars, getCars }
}