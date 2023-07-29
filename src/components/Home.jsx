import { Route, Routes } from 'react-router-dom'
import  CarouselComponent  from './Carrousel'
import withresults from '../datatest/withresults.json'
import '../Css/GridAutos.css'
import { Cars } from './Cars'
import { useCars } from '../Hooks/useCars'
import React, { useEffect, useState, useRef } from "react";
import { useSearch } from "../Hooks/useSearch";


export function Home() {

  const {search,updateSearch,error} = useSearch()
  const {cars, getCars} = useCars({ search })

  return (
    <>
    <header><CarouselComponent/></header>
    <main>
      <Cars cars={cars} />
    </main>
    </>
    )
}