import React, { useEffect, useState, useRef } from "react";

export function useSearch () {
    const [search, updateSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)
  
      useEffect(() => {
    
        if (isFirstInput.current) {
            isFirstInput.current = search == ''
            return
        }
      if (search == ''){
        setError('No se puede buscar un auto sin rellenar el campo')
        return
      }
  
      if (search.length < 2) {
        setError('la busqueda tiene que tener al menos 3 caracteres')
        return
      }
    },[search])
  
  
      return { search, updateSearch, error}
  
  }