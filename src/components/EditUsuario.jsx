import React, { useEffect,useState } from 'react'
import { Link, useParams} from 'react-router-dom';
import * as API from '../servicios/servicios'

export function EditUsuario(){

   
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    const [mensajeError, setMensajeError] = useState('')

    const [Username, setUsername] = useState('');
    const [ApellidoNombre, setApellidoNombre] = useState('');
    const [Telefono, setTelefono] = useState('');
    const [Rol, setRol] = useState('');
    const {id} = useParams();





    useEffect(()=>{
   
       trae_datos(id)
    },[])


    const trae_datos = async ()=>{
        console.log("el id del usuario es,",id)
        const datos= await API.getUsuarioById(id);
        console.log(id)
        console.log('los datos enviados son',datos[0].ApellidoNombre)
      
            setUsername(datos[0].Username)
            setApellidoNombre(datos[0].ApellidoNombre)
            setTelefono(datos[0].Telefono)
            setRol(datos[0].Rol)
        }

        



        const editar_usuario= () => {
            if (Username && ApellidoNombre && Telefono && Rol) {
              const datos_usuario = {
                Rol: Rol
              };
              
              API.UpdateUsuario(id,datos_usuario)
                 if(datos_usuario) {
                    setmensajeSuccess('Se editó el usuario');
                  setTimeout(() => {
                    setmensajeSuccess('');
                  }, 2000);
                }
        
            
            } else {
                setMensajeError('Error en la edición');
                setTimeout(() => {
                  setMensajeError('');
                }, 2000);
            }
            
          };

          return(
            <div className="card table bg-dark text-white">
                <div className="card-header">
                    Edicion de los datos del usuario
                </div>
                {
                    mensajeSuccess?
                    <div className="alert alert-success" role="alert">
                        {mensajeSuccess}
                    </div>:''
                }
                 {
                    mensajeError?
                    <div className="alert alert-danger" role="alert">
                        {mensajeError}
                    </div>:''
                }
                <div className="card-body ">
                    <div className='row'>
    
                    <div className="form-group col-4" >
                    <label for="">Username</label>
                    <input 
                    readOnly
                    type="text"
                    value={Username} 
                        onChange={(event)=>setUsername(event.target.value)}
                    name="" id="" className="form-control bg-dark text-white" placeholder="" aria-describedby="helpId"/>
                    <small id="helpId" className="text-muted">&nbsp;</small>
                    </div>

                    <div className="form-group col-4">
                    <label for="">Apellido y Nombre</label>
                    <input 
                    readOnly
                    type="text"
                    value={ApellidoNombre} 
                    onChange={(event)=>setApellidoNombre(event.target.value)}
                    name="" id="" className="form-control bg-dark text-white" placeholder="" aria-describedby="helpId"/>
                    <small id="helpId" className="text-muted">&nbsp;</small>
                    </div>

                    <div className="form-group col-4">
                    <label for="">Telefono</label>
                    <input 
                    readOnly
                    type="number" min="0"
                    value={Telefono} 
                    onChange={(event)=>setTelefono(event.target.value)}
                    name="" id="" className="form-control bg-dark text-white" placeholder="" aria-describedby="helpId"/>
                    <small id="helpId" className="text-muted ">&nbsp;</small>
                    </div>
    
    
                    <div className="form-group col-4">
                    <label for="">Rol</label>
                    <input 
                    type="text"
                    value={Rol} 
                    onChange={(event)=>setRol(event.target.value)}
                    name="" id="" className="form-control bg-dark text-white" placeholder="" aria-describedby="helpId"/>
                    <small id="helpId" className="text-muted">&nbsp;</small>
                    </div>
    
            
                    </div>
                    <td>
                    <div className="btn-group" role="group" aria-label="Basic example">
                                
                    <button onClick={editar_usuario} type="button" className="btn btn-outline-secondary text-success">Guardar</button>
                    <small id="helpId" className="text-muted">&nbsp;</small>
    
                    <Link to={'/usuario'}>
                    <button type="button" className="btn btn-outline-secondary text-primary">Volver a la lista</button>
                    </Link>
                    
                                    
                    </div>
                    </td>
                </div>
                
            </div>
        )
              }