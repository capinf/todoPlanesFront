import  CarouselComponent  from './Carrousel'
import '../Css/GridAutos.css'
import '../Css/searchBar.css'
import { Cars } from './Cars'
import { PlanPremium } from './PlanPremium'
import { useCars } from '../Hooks/useCars'
import React, { useEffect, useState, useRef } from "react";
import { useSearch } from "../Hooks/useSearch";
import { PlanNormal } from './PlanNormal'
import Footer from './Footer'



export function HomeTest() {

    const { search, updateSearch, error} = useSearch()
    const { cars, getCars } = useCars({ search })
    const [showCars, setShowCars] = useState(false);
  

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log({search});
      if (search != '') {
      getCars(search);
      setShowCars(true);
      }
    }
  
    const handleChange = (event) => {
      updateSearch(event.target.value)
      setShowCars(false);
  }

  return (
    <>
    <header>
        
        <CarouselComponent/>
        <div className='contenedorbusqueda'>
        <form className="busqueda" onSubmit={handleSubmit}>
            <input style={{border: '1px solid transparent',
            borderColor: error ? 'red' : 'transparent'}}
            onChange={handleChange} className="searchInput"
            value={search} type="search" placeholder="Ford..." aria-label="Search"/>
            <button className="buttonSearch" type="submit">Buscar</button>
            </form>
            {error && <p className='error' style={{ color : "red"}}>{error}</p>}
    </div>
    </header>
    <div>
    {showCars ? (
          <Cars cars={cars} />
        ) : (
          <div>
            <div className='premium plan'>
              <PlanPremium/>
            </div>
            <div className='barra-separadora'></div>
            <div className='normal plan'>
            <PlanNormal/>
            </div>
          </div>
        )}
    </div>
    <footer className='footerHome'>
    <button className='whatsapplogoHome'>
      <a href="https://wa.link/2mwgso"><img src="/img/whatsappfree.png" alt="" width="100px" height="100px" /></a>
      </button>
      <div>
          <Footer/>
      </div>
    </footer>
    </>
    )
}