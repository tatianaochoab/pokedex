import React, { Component } from 'react';
import Informacion from './Informacion';
import Buscar2 from './Buscar2';


class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemones: [],
            nombrePoke: ""
        }
    }

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
    handlerChange = (e) => {
        this.setState({
            nombrePoke: e.target.value
        })
    }

    render() {
        return (<div>
            <Buscar2
            handlerChange={(e)=>this.handlerChange(e)}
            nombrePoke={this.state.nombrePoke}
            />
            <Informacion 
            pokemones={this.state.pokemones}
            nombrePoke={this.state.nombrePoke}
            />
        </div>)
    }

}

export default Pokemon;