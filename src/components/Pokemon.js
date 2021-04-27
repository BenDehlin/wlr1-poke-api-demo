import React, { Component } from "react"
import axios from "axios"

class Pokemon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokeData: null,
    }
  }

  componentDidMount() {
    axios
      .get(this.props.pokemon.url)
      .then((results) => {
        // console.log(results)
        this.setState({ pokeData: results.data })
      })
      .catch((err) => console.log(err))
  }

  render() {
    console.log(this.state.pokeData)
    const { pokeData } = this.state
    return (
      <div key={this.props.index}>
        <h1>{this.props.pokemon.name}</h1>
        {this.state.pokeData && (
          <div>
            <img
              alt={this.state.pokeData.name}
              src={this.state.pokeData.sprites.front_default}
            />
            <p>TYPES:</p>
            <ul>
              {this.state.pokeData.types.map((element) => {
                return <li>{element.type.name}</li>
              })}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Pokemon
