import React from 'react';


const Buscar2=({handlerChange, nombrePoke})=>{
    return (<div>
        <label htmlFor='buscarPoke'>Busca tu Pokemon favorito</label>
        <input type='text' id='buscarPoke' onChange={handlerChange} value={nombrePoke} ></input>
    </div>)
}

export default Buscar2;