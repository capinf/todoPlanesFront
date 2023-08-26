import React, { useEffect, useRef, useState } from "react";
import '../Css/Login.css'
import * as API from '../servicios/servicios'


export function Login () {


	//INICIA ENVIO DE SIGN IN//
	const [username, setUser] = useState('');
	const [password, setPassword] = useState('');
	const [sesion, setSesion] = useState('');
	const [MensajeError, setMensajeError] = useState('');
	const [MensajeSucces, setMensajeSucces] = useState('');

		const send_form = async(event)=>{

		event.preventDefault();
		const usuario = await API.Login({username, password})
		//Obtengo los campos//
		const campos = usuario.datos[0]
		//filtro el rol//
		const rol = campos.rol
		
		if(usuario.status){
			console.log('se logeo correctamente')
			window.localStorage.setItem('saveUsuario', JSON.stringify(usuario));
			window.localStorage.setItem('saveRol', JSON.stringify(rol));
			window.localStorage.setItem('token', JSON.stringify(usuario.token));
			setSesion(sesion)
			setUser('')
			setPassword('')
			setMensajeSucces('Inició sesion correctamente')
			setTimeout(()=>{
				setMensajeSucces('')
				window.location.href = '/';
			}, 2000)
		}else{
			setMensajeError(usuario.mensaje)
			setTimeout(()=>{
				setMensajeError('')
			}, 4000)
		}
	}
	//FINALIZA SIGN IN//

	//INICIA SIGN UP//
	const [MsjSuccess, setMsjSuccess] = useState('')
	const [MsjError, setMsjError] = useState('')
  
	const userRef = useRef();
	const passwordRef = useRef();
	const password2Ref = useRef();
	const apellido_nombre = useRef();
	const emailRef = useRef();
	const telRef = useRef();
	
	const guardar_usuario = () =>{
	console.log('Llama a la funcion correctamente')
	const textInput = userRef.current.value;
	const textInput2 = passwordRef.current.value;
	const textInput3 = password2Ref.current.value;
	const textInput4 = apellido_nombre.current.value;
	const textInput5 = emailRef.current.value;
	const textInput6 = telRef.current.value;
	console.log('lo que está en el text input es ', textInput, textInput2, textInput3, textInput4, textInput5)
	
	const enviarInputText = {
	  username: textInput,
	  password: textInput2,
	  apellido_nombre: textInput4,
	  email: textInput5,
	  telefono: textInput6
	}
  
  //funcion para matchear contraseñas//
	  if(Object.keys(enviarInputText).length > 0){
			if(textInput2===textInput3){
			console.log(enviarInputText)
			API.Registro(enviarInputText);
			setMsjSuccess('Se creó el usuario correctamente')
			setTimeout(()=>{
				setMsjSuccess('');
			 	window.location.reload(true);
			}, 3000)
  
		  }else{
			setMsjError('las contraseñas no coinciden')
			setTimeout(()=>{
				setMsjError('');
			}, 3000)
		  }
	  }
  }
	//FINALIZA SIGN UP//


    useEffect(() => {
        const signUpButton = document.getElementById("signUp");
        const signInButton = document.getElementById("signIn");
        const container = document.getElementById("container");
    
        signUpButton.addEventListener("click", () => {
          container.classList.add("right-panel-active");
        });
    
        signInButton.addEventListener("click", () => {
          container.classList.remove("right-panel-active");
        });
    
        // Limpieza de los event listeners cuando el componente se desmonta
        return () => {
          signUpButton.removeEventListener("click", () => {
            container.classList.add("right-panel-active");
          });
    
          signInButton.removeEventListener("click", () => {
            container.classList.remove("right-panel-active");
          });
        };
      }, []);

    return(
<>
		{
			MensajeError?
			<div class="alert alert-warning" role="alert">
			 {MensajeError}
			</div>
			:('')
		}

		{
          MsjError?
          <div className="alert alert-warning" role="alert">{MsjError}</div>
          :''
        }

        {
          MsjSuccess?
          <div className="alert alert-success" role="alert">{MsjSuccess}</div>
          :''
        }

		{
          MensajeSucces?
          <div className="alert alert-success" role="alert">{MensajeSucces}</div>
          :''
        }

<div className="container" id="container">
	<div className="form-container sign-up-container">
		<form className="formulario" onSubmit={guardar_usuario} action="#">
			<h1 id="titulazo">Crear Cuenta</h1>
			<input required id="inpunt" ref={userRef} type="text" placeholder="Nombre de Usuario" />
			<input required id="inpunt" ref={emailRef} type="email" placeholder="Email" />
			<input required id="inpunt" ref={apellido_nombre} type="text" placeholder="Nombre y Apellido" />
			<input required id="inpunt" ref={passwordRef} type="password" placeholder="Contraseña" />
			<input required id="inpunt" ref={password2Ref} type="password" placeholder="Repetir Contraseña" />
			<input required id="inpunt" ref={telRef} type="number" placeholder="Telefono" />
			<label><input required type="checkbox" id="cbox1" value="first_checkbox"  /> Aceptas <a href="/terms">terminos y condiciones</a> </label><br></br>
			<button type="submit" id="luisbutton">Registrarse</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form onSubmit={send_form} className="formulario" action="#">
			<h1 id="titulazo" >Iniciar Sesión</h1>
			<input value={username} onChange={(event) => setUser(event.target.value)} id="inpunt" type="text" placeholder="Nombre de Usuario" />
			<input value={password} onChange={(event) => setPassword(event.target.value)} id="inpunt" type="password" placeholder="Password" />
			<button type="submit" id="luisbutton">Iniciar Sesión</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1 id="titulazo">Bienvenido!</h1>
				<p id="parrafazo">Para mantenerte conectado con nosotros por favor ingrese su informacion personal</p>
				<button className="ghost" id="signIn">Iniciar Sesión</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1 id="titulazo" >Hola, amigo!</h1>
				<p id="parrafazo">Ingresa tus datos para crear un usuario</p>
				<button className="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>
</>
    )
}