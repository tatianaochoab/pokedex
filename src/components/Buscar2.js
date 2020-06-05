import React from 'react';


const Buscar2=({handlerChange, nombrePoke})=>{
    return (<div className='buscador'>
        <label htmlFor='buscarPoke'>Captura tu Pokemon</label>
        <input type='text' id='buscarPoke' onChange={handlerChange} value={nombrePoke} ></input>
    </div>)
}

export default Buscar2;