import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import * as API from '../../servicios/servicios'
//import { EditUsuario } from './EditUsuario'

export function Formularios(){

    const [nombreplan, setNombreplan] = useState([]);
    // // const [Nombre, setNombre] = useState('');
    // // const [Direccion, setDireccion] = useState('');
    // // const [Telefono, setTelefono] = useState('');
    const [mensajeError, setmensajeError] = useState('')
    const [mensajeSuccess, setmensajeSuccess] = useState('')


    useEffect(()=>{
        API.getFormulario().then(nombreplan)
    },[])
    
   



    //BOTONES//

    const eliminarform  = async(id)=>{
        console.log('el id que vamos a dar de baja es el',id)

        const user = await API.EliminarPublicacion(id)
        if(user.status){
            
            setmensajeSuccess(user.mensaje)
            setTimeout(()=>{
                setmensajeSuccess('Se elimino la publicacion')
                window.location.reload(true)
            }, 3000)

        }else{
            setmensajeError(user.mensaje)
            setTimeout(()=>{
                setmensajeError('No se pudo eliminar la publicacion')
            }, 4000)
        }
    }

    return(

        <div className="card table bg-dark text-white">
            
        <div className="card-header">
        Publicaciones
       
        </div>
        {
                    mensajeError?
                    <div class="alert alert-warning" role="alert">
                     {mensajeError}
                    </div>:''
                }

                {
                    mensajeSuccess?
                    <div class="alert alert-success" role="alert">
                     {mensajeSuccess}
                    </div>:''
                }
                
        <div className="card-body">
      
        <div className="table-responsive">
            
                <table className="table text-white">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Plan</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nombreplan.map((formulario)=>(
                        <tr  key={formulario.idFormulario}>
                            <td scope="row">{formulario.idFormulario}</td>
                            <td>{formulario.nombrePlan}</td>
                    
                            <td>
                            <div className="btn-group" role="group" aria-label="Basic example">
                            <button onClick={() =>eliminarform(formulario.idFormulario)} type="button" className="btn btn-outline-primary">Eliminar</button>
                                

                               
                                

                            </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
            
            

    )  
}