import React from 'react'
import Informacion from './Informacion';

class Buscar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Poke: [],
            nombrePoke: ""
        }
    }

    buscarPokemon = () => {

        let i = this.state.nombrePoke
        let URL = `https://pokeapi.co/api/v2/pokemon/${i}/`;
        fetch(URL, {
            method: "GET"
        })
            .then((response) => response.json())
            .then((datos) => {
                let elementos = [];
                elementos.push(datos);
                this.setState({
                    Poke: elementos,
                    nombrePoke: ""
                })
                console.log(datos)
            })
            .catch(error => {
                let elementos = [];
                this.setState({
                    Poke: elementos,
                    nombrePoke: ""
                })
            })
    }

    handlerChange = (e) => {
        this.setState({
            nombrePoke: e.target.value
        })
    }

    render() {
        return (
            <div className='buscador'>
                <label htmlFor='buscarPoke'>Busca tu Pokemon favorito</label>
                <input type='text' id='buscarPoke' onChange={this.handlerChange} value={this.state.nombrePoke} ></input>
                <button onClick={this.buscarPokemon}>Buscar</button>
                <Informacion pokemones={this.state.Poke} />
            </div>
        )
    }
}

export default Buscar;