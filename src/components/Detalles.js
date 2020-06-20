import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Detalles extendes Component{
    constructor(props){
        super(props);
        this.state = {
            abilities:[],
            stats:[],
            

        }
    }
}

// var poke = {}
// const Detalles = (props) => {
//     console.log(props.match.params)
//     const { informacionId } = props.match.params // aqui vienen los parametros
//     FindInformacionById(informacionId)

//     console.log(FindInformacionById(informacionId))
//     return (
//         <div id={informacionId} >
//             <Link to="/informacion">Ir atras</Link>
//             <p><strong>Nombre {poke.name} ooo</strong></p>
//             <p><strong>Habilidades</strong></p>
//             <p><strong>Estadísticas</strong></p>
//             <p><strong>Peso</strong></p>
//             <p><strong>Altura</strong></p>
//         </div>
//     )
// }

// let FindInformacionById = async (informacionId) => {
//     informacionId = Number(informacionId)
//     const url = "https://pokeapi.co/api/v2/pokemon/" + informacionId;
//     const res = await fetch(url);
//     const data = await res.json();
//     return data
// }
//     export default Detalles;