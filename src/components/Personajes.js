import React from 'react'

export const Personajes = ({ personajes = [] }) => {
    return (
        <div className='row'>
            {
                personajes.map((item, index) => (

                    <div key={index} className='col mb-3'>
                        <div className='card border-primary ' style={{minWidth: "200px"}}>
                        <div className='card-body'>
                                <h5 className='card-title'>{item.name}</h5>
                                <hr/>
                                <p>Especie: {item.species}</p>
                                <p>Ubicacion: {item.location.name}</p>
                            </div>
                            <div className='card  border-primary m-2'>
                            <img src={item.image} alt="personaje "/>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}
export default Personajes;
