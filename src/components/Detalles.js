import React from 'react'
import { Link } from "react-router-dom"

var poke = {}
const Detalles = (props) => {
    console.log(props.match.params)
    const { informacionId } = props.match.params // aqui vienen los parametros
    const informacion = FindInformacionById(informacionId)

    if (!informacion) { // si no existe el id del libro, mostraremos error
        return (
            <p>
                Lo sentimos, la información no esta disponible...
            </p>
        )
    }
    return (
        <div id={informacionId} >
            <Link to="/informacion">Ir atras</Link>
            <p><strong>Nombre {informacion.name}</strong></p>
            <p><strong>Habilidades</strong></p>
            <p><strong>Estadísticas</strong></p>
            <p><strong>Peso</strong></p>
            <p><strong>Altura</strong></p>
        </div>
    )
}

function FindInformacionById(informacionId) {
    informacionId = Number(informacionId)
    const detPokemon = async () => {
        const url = "https://pokeapi.co/api/v2/pokemon/" + informacionId;
        const res = await fetch(url)
        const data = await res.json()
        const pokemon = data
    }
    
    console.log(pokemon)
    return informacionId

}


export default Detalles;