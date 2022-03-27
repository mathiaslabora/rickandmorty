import React from 'react'

const Barra = ({titulo}) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
    <div className="container">
      <a className="navbar-brand text-uppercase" href="/"> {titulo}</a>
    </div>
  </nav>
  )
}

export default Barra