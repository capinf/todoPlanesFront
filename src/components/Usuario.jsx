import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import * as API from '../servicios/servicios.js'
// import { EditClientes } from './EditUsuario'

export function Usuarios(){

    const [usuario, setUsuario] = useState([]);
    // // const [Nombre, setNombre] = useState('');
    // // const [Direccion, setDireccion] = useState('');
    // // const [Telefono, setTelefono] = useState('');
    const [mensajeError, setmensajeError] = useState('')
    const [mensajeSuccess, setmensajeSuccess] = useState('')


    useEffect(()=>{
        API.getUsuario().then(setUsuario)
    },[])
    
   



    //BOTONES//

    const bajaUsuario  = async(id)=>{
        console.log('el id que vamos a dar de baja es el',id)

        const user = await API.bajaUsuario(id)
        if(user.status){
            
            setmensajeError(user.mensaje)
            setTimeout(()=>{
                setmensajeError('')
                window.location.reload(true)
            }, 3000)

        }else{
            setmensajeError(user.mensaje)
            setTimeout(()=>{
                setmensajeError('')
            }, 4000)
        }
    }

    const altaUsuario = async(id)=>{
        const user = await API.altaUsuario(id)
        if(user.status){
            setmensajeSuccess(user.mensaje)
            setTimeout(()=>{
                setmensajeSuccess('')
                window.location.reload(true)
            }, 3000)
        }else{
            setmensajeError(user.mensaje)
            setTimeout(()=>{
                setmensajeError('')
            }, 4000)
        }
    }




    return(

        <div className="card table bg-dark text-white">
            
        <div className="card-header">
        Usuarios
       
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
                            <th scope="col">Username</th>
                            <th scope="col">Apellido y Nombre</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Rol</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuario.map((usuarios)=>(
                        <tr  key={usuario.id}>
                            <td scope="row">{usuario.id}</td>
                            <td>{usuarios.username}</td>
                            <td>{usuarios.apellido_nombre}</td>
                            <td>{usuarios.telefono}</td>
                            <td>{usuarios.estado}</td>
                            <td>{usuarios.rol}</td>


                            <td>{usuarios.estado=='A'?'Activo':'Baja'}</td>
                            <td>
                            <div className="btn-group" role="group" aria-label="Basic example">
                            { (usuarios.estado=='B')? 

                                <button onClick={() =>altaUsuario(usuarios.id,'A')} type="button" className="btn btn-outline-primary">Alta</button>
                                :
                                <>

                               
                                <button onClick={() => bajaUsuario(usuarios.id,'B')} type="button" className="btn btn-outline-danger">Baja</button>
                                <Link name="" id="" className="btn btn-outline-secondary" to={`/edit_clientes/${usuarios.idClientes}`} role="button">Editar </Link>
                                </>
                            }

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

