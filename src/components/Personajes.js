import React from 'react'

export const Personajes = ({ personajes = [] }) => {
    return (
        <div className='row'>
            {
                personajes.map((item, index) => (

                    <div key={index} className='col mb-3'>
                        <div className='card' style={{minWidth: "200px"}}>
                            <img src={item.image} alt="personaje "/>
                            <div className='card-body'>
                                <h5 className='card-title'>{item.name}</h5>
                                <hr/>
                                <p>Especie: {item.species}</p>
                                <p>Ubicacion: {item.location.name}</p>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}
export default Personajes;
