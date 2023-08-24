import React, { useEffect,useState } from 'react'
import { Link, useParams} from 'react-router-dom';
import * as API from '../../servicios/servicios'

/// editar usuario ///

export function EditUsuario() {
  const [mensajeSuccess, setmensajeSuccess] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  const [username, setusername] = useState('');
  const [apellido_nombre, setapellido_nombre] = useState('');
  const [telefono, settelefono] = useState('');
  const [rol, setrol] = useState('');
  const [nombrePlan, setnombrePlan] = useState('');

  const { id } = useParams(); // Obtener el ID del usuario de los parámetros de la ruta

  useEffect(() => {
      trae_datos();
  }, []);

  const trae_datos = async () => {
    try {
        console.log("El ID del usuario es,", id);
        const datos = await API.getUsuario(); // Obtener los datos, ajusta esto según tu implementación
        console.log('Los datos enviados son', datos);
         // Obtener datos del formulario utilizando el mismo ID
         const datosFormulario = await API.getFormulariobyId();
         console.log('Los datos de formulario son', datosFormulario);
 

        if (datos && datos.length > 0) {
            const usuario = datos.find(data => data.id === parseInt(id)); // Convertir id a número y comparar
            console.log('Usuario encontrado:', usuario);

            if (usuario) {
                console.log('Nombre de usuario:', usuario.username);
                console.log('ID de usuario:', id);

                setusername(usuario.username);
                setapellido_nombre(usuario.apellido_nombre);
                settelefono(usuario.telefono);
                setrol(usuario.rol);
                
            }
            if (datosFormulario && datosFormulario.length > 0) {
              const formulario = datosFormulario[0];
              console.log('Formulario encontrado:', formulario);
  
              // Aquí obtenemos el valor de la columna "nombrePlan"
              const nombrePlanFormulario = formulario.nombrePlan;
              console.log('Nombre del plan en el formulario:', nombrePlanFormulario);
              setnombrePlan(nombrePlanFormulario);
            } else {
                console.log('No se encontraron datos para el usuario con el ID capturado');
            }
        } else {
            console.log('No se encontraron datos para el usuario');
        }
    } catch (error) {
        console.log('Error al obtener los datos', error);
    }
}


        



        const editar_usuario = () => {
            if (username && apellido_nombre && rol) {
              const datos_usuario = {
                username: username,
                apellido_nombre: apellido_nombre,
                telefono: telefono,
                rol: rol,
                formulario: nombrePlan
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

          const elminarFormulario = async(id)=>{
            const user = API.EliminarPublicacion(id)
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
                    <div className="form-group col-4" >
                      <label for="">Formularios</label>
                      <input
                      readOnly 
                      type="text"
                       value={nombrePlan} 
                      name="" id="" className="form-control bg-dark text-white" placeholder="" aria-describedby="helpId"/>
                      <small id="helpId" className="text-muted">&nbsp;</small>
                      <button onClick={()=>elminarFormulario(username.id)} type="button" className="btn btn-outline-primary">Eliminar</button>
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