import React, { useState, useEffect } from "react"
import { Table } from "react-bootstrap"
import '../Css/Adjudicados.css'
export function Adjudicados() {

    // const [adjudicados,setAdjudicados] = useState([])

    // useEffect(() =>{
    //     API.getAdjudicados().then(setAdjudicados)
    // }, [])

    return (
      <>
      <h1 style={{color:"white"}}>Adjudicados</h1>
      <div className="table-container">
        <Table className="adjudicados-table">
            <thead>
                <tr className="column-adjudicados">
                    <th></th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Edad</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="imgcontainer"><img className="imagen-table" src="/img/imgtable.jpg" alt="" /></td>
                    <td className="info">Juliana</td>
                    <td className="info">Perez</td>
                    <td className="info">69</td>
                </tr>
                <tr>
                    <td className="imgcontainer"><img className="imagen-table" src="/img/imgtable.jpg" alt="" /></td>
                    <td className="info">Juliana</td>
                    <td className="info">Perez</td>
                    <td className="info">69</td>
                </tr>
            {/* {adjudicados.map((adjudicado) => (
                    <tr key={adjudicado.idadjudicados}>
                        <td>{adjudicado.nombre}</td>
                        <td>{adjudicado.apellido}</td>
                        <td>{adjudicado.edad}</td>
                        <td>
                            <div className="btn-group" role="group" aria-label="">
                            <Link to={`/contacto/${abogado.idabogados}`}><button className="btn btn-secondary" type="button">CONTACTAR</button></Link>
                            </div>
                        </td>
                    </tr>
                ))} */}
            </tbody>
        </Table>
      </div>
      </>
    )
  }