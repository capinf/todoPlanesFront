import '../Css/GridAutos.css'

// id: car.idFormulario,
// title: car.nombrePlan,
// precio: car.precio,
// cuotas: car.cantidadCuotas,
// adjudicado: car.adjudicado,
// anio: car.anioInicio,
// localidad: car.localidad,
// telefono: car.telefono,
// img: car.imgPath

function ListOfCars ({cars}) {

    return (
        <>
        <div className='Card'>
        <div className='carta-autos'>
        <ul className='gridAutos'>
        {
        cars.map(car =>(

            <li className='card-list' key={car.id}>
            <img className='card-image' src={`/${car.img}`} alt="" />
            <h1 className='title'>{car.title}</h1>
            <div className="card-details">
            <p className='infos'>Tipo de Plan: {car.tipoPlan}</p>
            <p className='infos'>Precio: {car.precio}</p>
            <p className='infos'>Cuotas pagadas: {car.cuotas}</p>
            <p className='infos'>¿Adjudicado?: {car.adjudicado}</p>
            <p className='infos'>Localidad: {car.localidad}</p>
            <p className='infos'>Año de Inicio: {car.anio}</p>
            <p className='infos'>{car.telefono}</p>
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
}

function NoCarResponse () {
    return (
        <p>No se encontraron data para la busqueda</p>
    )
}

export function Cars ({cars}) {
    const hasCars = cars?.length > 0

    return (

        hasCars
        ? <ListOfCars cars={cars} />
        : <NoCarResponse/>
    )
}