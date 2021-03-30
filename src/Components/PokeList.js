import React from "react";

import axios from "axios";

let pokeDict = []

export default class PokeList extends React.Component {
     state = {
          pokemon: "",
          type: ""
     };

     componentDidMount() {
          for (let i = 1; i <= 151; i++) {
               axios
                    .get(`https://pokeapi.co/api/v2/pokemon/` + i  + `/`)
                    .then((res) => {
                         const pokemon = res.data.name;
                         const type = res.data.types[0].type.name

                         pokeDict.push(pokemon)
                         console.log(type)
                         // this.setState({ pokemon });
                         if (i === 148) {
                              console.log(res);
                         }
                    });
          }
          console.log(pokeDict);
     }



  render() {
    return (
      <ul>
              {/* <li>{this.state.pokemon.charAt(0).toUpperCase() + this.state.pokemon.slice(1)}</li> */}
          <p>Test</p>
      </ul>
    );
  }
}
