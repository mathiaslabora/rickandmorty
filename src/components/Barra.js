import React from 'react'
import {Link} from "react-router-dom";
const Barra = ({titulo}) => {
  return (
    <nav className="navbar navbar-dark bg-primary">
    <div className="container">
      <a className="navbar-brand text-uppercase" href="/"> {titulo}</a>
      <Link to="/capitles" className='btn btn-secondary btn-lg'>Capitulos</Link>
     
    </div>
  </nav>
  )
}

export default Barra