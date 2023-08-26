import './App.css'
import { Route, Routes } from 'react-router-dom'
import { CargaAutos } from './components/CargaAutos'
import { NavBarTest } from './components/NavBarTest'
import { NavBar } from './components/NavBar'
import { NavBarTestMain } from './components/NavBarTestMain'
import { HomeTest } from './components/HomeTest'
import { Login } from './components/Login'
import { CargaPlan } from './components/QuieroVenderMiPlan'
import { Adjudicados } from './components/Adjudicados'
import  Planes  from './components/Planes'
import { useState, useEffect } from 'react'
import TermsAndConditions from './components/TerminosYCondiciones'
import { Usuarios } from './components/endpoints/edits'
import { EditUsuario } from './components/endpoints/EditUsuario'

function App() {

  const [sesion, setSesion] = useState('');
  const [user, setUser] = useState('')

        
        useEffect(()=>{
          const sesionLogeada = JSON.parse(localStorage.getItem('token'))
          const userRol = JSON.parse(localStorage.getItem('saveRol'))
          if(sesionLogeada){
            setSesion(sesionLogeada)
            setUser(userRol)
          }  
        },[])

        
  return (
    <>
        { !sesion  ? (
          <>
          <div><NavBar/></div>
          </>
        ) : user === 'admin' ? (
          <div><NavBarTestMain/></div>
        ) : (
          <div><NavBarTest/></div>
        )}
            
      {/* <NavBarTest/> */}
      <Routes>
      <Route path="/cargaAutos" element ={<CargaAutos/>}></Route>
      <Route path='/' element ={<HomeTest/>}></Route>
      <Route path='/login' element ={<Login/>}></Route>
      <Route path='/cargaPlan' element ={<CargaPlan/>}></Route>
      <Route path='/adjudicados' element ={<Adjudicados/>}></Route>
      <Route path='/planes' element ={<Planes />}></Route>
      <Route path='/terms' element={<TermsAndConditions/>}></Route>
      <Route path='/usuario' element={<Usuarios/>}></Route>
      <Route path='/edit_usuarios/:id' element={<EditUsuario/>}></Route>
      </Routes>
    </>

  )
}
export default App
