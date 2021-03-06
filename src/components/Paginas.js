import React from 'react'

const Paginas = ({ prev, next, onPrev, onNext }) => {

    const pageAnterior = () => {
        onPrev();
    }

    const pageSiguiente = () => {
        onNext();
    }



    return (
        <nav className='my-3'>
            <ul className='pagination'>
                {prev ? (<li className='page-item'>
                    <button className='page-link' onClick={pageAnterior}>Anterior</button></li>) : null
                }
                {
                    next ? (<li className='page-item'>
                        <button className='page-link' onClick={pageSiguiente}>Siguiente</button></li>) : null
                }


            </ul>
        </nav>
    )
}
export default Paginas;