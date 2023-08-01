import React, { useEffect,useState } from 'react'
import { Link, useParams} from 'react-router-dom';
import * as API from '../../servicios/servicios'

/// editar usuario ///

export function EditUsuario(){

   
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    const [mensajeError, setMensajeError] = useState('')

    const [username, setusername] = useState('');
    const [apellido_nombre, setapellido_nombre] = useState('');
    const [telefono, setelefono] = useState('');
    const [rol, setrol] = useState('');
    const {id} = useParams();





    useEffect(()=>{

       trae_datos(id)
    },[])


    const trae_datos = async ()=>{
        console.log("el id del usuario es,",id)
        const datos= await API.getUsuario(id);
        console.log(id)
        console.log('los datos enviados son',datos[0].username)
      
            setusername(datos[0].username)
            setapellido_nombre(datos[0].apellido_nombre)
            setrol(datos[0].rol)
        }

        



        const editar_usuario = () => {
            if (username && apellido_nombre && rol) {
              const datos_usuario = {
                username: username,
                apellido_nombre: apellido_nombre,
                telefono: telefono,
                rol: rol
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
                       value={username} 
                      name="" id="" className="form-control bg-dark text-white" placeholder="" aria-describedby="helpId"/>
                      <small id="helpId" className="text-muted">&nbsp;</small>
                    </div>
                    <div className="form-group col-4">
                      <label for="">Apellido y Nombre</label>
                      <input 
                      readOnly
                      type="text"
                       value={apellido_nombre} 
                      name="" id="" className="form-control bg-dark text-white" placeholder="" aria-describedby="helpId"/>
                      <small id="helpId" className="text-muted">&nbsp;</small>
                    </div>
                    <div className="form-group col-4">
                      <label for="">Telefono</label>
                      <input 
                      readOnly
                       value={telefono} 
                      name="" id="" className="form-control bg-dark text-white" placeholder="" aria-describedby="helpId"/>
                      <small id="helpId" className="text-muted ">&nbsp;</small>
                    </div>
                    <div className="form-group col-4">
                    <label htmlFor="">Rol</label>
                    <select 
                            value={rol} 
                            onChange={(event)=>setrol(event.target.value)}
                            className="form-control bg-dark text-white">
                                    <option value="">Selecciona un rol</option>
                                    <option value="normal">Normal</option>
                                    <option value="premium">Premium</option>
                                   
                                   
                    </select>
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