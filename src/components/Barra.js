import React from 'react'
import {Link} from "react-router-dom";
const Barra = ({titulo}) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
    <div className="container">
      <a className="navbar-brand text-uppercase" href="/"> {titulo}</a>
      <Link to="/capitles">Capitulos</Link>
    </div>
  </nav>
  )
}

export default Barra