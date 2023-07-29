import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export function NavBarTestMain () {
  const [sesion, setSesion] = useState('')

    const Logout = async(event)=>{

            setSesion('')
            window.localStorage.removeItem('token');
            window.location.reload(true);
        }

    return (
        <>
    <Navbar className="barra" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-auto" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link style={{color:"white"}} href='/'>Inicio</Nav.Link>
          <Nav.Link style={{color:"aquamarine"}} href="#">Planes Avanzados</Nav.Link>
          {/* <Nav.Link style={{color:"white"}} href="#">Adjudicados</Nav.Link> */}
          <Nav.Link style={{color:"aquamarine"}} href="#">¡Quiero vender mi plan!</Nav.Link>
          <Nav.Link style={{color:"white"}} href="/cargaAutos">¡Subí tu auto!</Nav.Link>
          <Nav.Link style={{color:"aquamarine"}} href="/usuario">Usuarios</Nav.Link>
          {/* <Link to = {'/usuario'}>Usuarios</Link> */}
        </Nav>
      </Navbar.Collapse>
            <div className="logo">
            <img src="/img/logo.png" width="120px" height="120px" alt="logo" />
            </div>
            <Nav.Link onClick={Logout} className="login" href="#"><img src="/img/logout.png" width="60px" height="50px" alt="user" /></Nav.Link>
    </Navbar>

        </>
    )
}