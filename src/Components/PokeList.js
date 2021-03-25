import React from "react";

import axios from "axios";

let pokeDict = []

export default class PokeList extends React.Component {
     state = {
          pokemon: "",
     };

     // componentDidMount() {
     //      for (let i = 1; i <= 151; i++) {
     //           axios
     //                .get(`https://pokeapi.co/api/v2/pokemon/` + i  + `/`)
     //                .then((res) => {
     //                     const pokemon = res.data.forms[0].name;
     //                     pokeDict.push(pokemon)
     //                     // this.setState({ pokemon });
     //                     console.log(pokeDict)
     //                });
     //      }
     // }



  render() {
    return (
      <ul>
              {/* <li>{this.state.pokemon.charAt(0).toUpperCase() + this.state.pokemon.slice(1)}</li> */}
              <p>Hiya!</p>
      </ul>
    );
  }
}
