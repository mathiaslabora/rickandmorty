import React from 'react'

export const Episode = ({ espisodes = [] }) => {
    return (
        <div className='row'>
            {
                espisodes.map((item, index) => (

                    <div key={index} className='col mb-3'>
                        <div className='card' style={{minWidth: "300px"}}>
                            <div className='card-body'>
                                <h5 className='card-title'>{item.name}</h5>
                                <hr/>
                                <p>Episodio: {item.episode}</p>
                                <p>Fecha: {item.air_date}</p>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}
export default Episode;
