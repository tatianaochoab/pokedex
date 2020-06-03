import React from 'react'



const Informacion = ({ pokemones }) => {
    return (
        <div className='container-fluid'>

            <section className='row row-cols-2 row-cols-md-4'>
                {pokemones.map((info, index) => {
                    return (
                        <div className='card-deck col mx-auto mt-5' key={index}>
                            <div className='card d-flex align-items-center justify-content-center'>
                                <img className='img-1' src={info.sprites.front_default}></img>
                                <div className='card-body'>
                                    <p className=''><strong className='text-info'>Nombre:</strong> {info.name}</p>
                                    <p><strong className='text-info'>Número:</strong>  {info.id}</p>
                                    <>{info.types.map((tipo) => {
                                        return <p key={tipo.type.name}><strong className='text-info'>Tipo:</strong>  {tipo.type.name}</p>
                                    })}</>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>
        </div>

    )
}
export default Informacion;