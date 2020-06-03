import React, { Component } from 'react';
import Informacion from './Informacion';


class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemones: [],
            name: "tati"
        }
    }

    // componentDidMount() {
    //     fetch('https://pokeapi.co/api/v2/pokemon?limit=25&offset=0/results',{
    //         method:'GET'
    //     })
    //         .then((respuesta) =>
    //             respuesta.json())
    //         .then((datos) =>
    //             this.setState({
    //                 datosPokemon: datos
    //             })
    //         )
    //         .catch((console.error('error en carga de datos')))
    // }

    componentDidMount() {
        let URL = "https://pokeapi.co/api/v2/pokemon?limit=25&offset=0";

        fetch(URL, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((datos) =>
                datos.results.map((item) => {
                    this.cargarPokemon("https://pokeapi.co/api/v2/pokemon/" + item.name)
                })
            )
            .catch((error) => console.error(error));
    }
    cargarPokemon = (URL) => {
        fetch(URL, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((datos) => {
                let elementos = this.state.pokemones;
                elementos.push(datos);
                this.setState({
                    pokemones: elementos
                })
            }
            )
            .catch((error) => console.error(error));
    }

    render() {
        // this.cargarPokemon();
        if (this.state.pokemones.length >= 1) {
            return (
                <Informacion
                    pokemones={this.state.pokemones}
                />
            )
        } else {
            return <p>No hay datos</p>
        }
    }

}

export default Pokemon;