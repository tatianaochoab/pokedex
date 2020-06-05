import React, { Component } from 'react';
import Informacion from './Informacion';
import Buscar2 from './Buscar2';
import Image from './images/pokemon.png'


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
        return (
            <div className='total'>
                <div className='container container-sm  container-fluid contenido-total'>
                    <div className='titulo'><img src={Image} /></div>
                    <Buscar2
                        handlerChange={(e) => this.handlerChange(e)}
                        nombrePoke={this.state.nombrePoke}
                    />
                    <Informacion
                        pokemones={this.state.pokemones}
                        nombrePoke={this.state.nombrePoke}
                    />
                     <footer><small>Copyright ©2020 Tatiana Ochoa Bautista</small></footer>
                </div>
            </div>
        )
    }

}

export default Pokemon;