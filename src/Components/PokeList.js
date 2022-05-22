import React from "react";

import axios from "axios";
import PokeCards from "./PokeCard"

const url = "https://www.pokemon.com/us/pokedex/";

export default class PokeList extends React.Component {
     state = {
          pokemon: []
     };

     colorPicker = (type) => {
          switch (type) {
               case "grass":
                    return "bg-green-300";
               case "fire":
                    return "bg-red-300";
               case "water":
                    return "bg-blue-300";
               case "ground":
                    return "bg-orange-900";
               case "psychic":
                    return "bg-purple-300";
               case "flying":
                    return "bg-purple-50";
               case "electric":
                    return "bg-yellow-300";
               case "poison":
                    return "bg-purple-700";
               case "dragon":
                    return "bg-purple-700";
               case "ice":
                    return "bg-blue-100";
               case "rock":
                    return "bg-orange-900";
               case "bug":
                    return "bg-green-300";
               case "ghost":
                    return "bg-purple-700";
               default:
                    return "bg-gray-300";
          }
     };

     componentDidMount() {
          let idLogic
          for (let i = 1; i <= 151; i++) {
               axios
                    .get(`https://pokeapi.co/api/v2/pokemon/` + i + `/`)
                    .then((res) => {
                         // console.log(res.data)
                         if (i < 10) {
                              idLogic = `00`
                         } else if (i < 100) {
                              idLogic = `0`
                         } else {
                              idLogic = ``
                         }
                         const pokemon = {
                              name: res.data.name,
                              type: res.data.types[0].type.name,
                              picture: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${idLogic}${i.toString()}.png`,
                              pokeLink: url + res.data.name,
                              entryNum: res.data.id,
                              color: this.colorPicker(res.data.types[0].type.name)
                         }
                         // this.state.pokemon.push(pokemon);
                         this.setState({ pokemon: [...this.state.pokemon, pokemon] })
                    });
          }
     }

     render() {
          if (this.state.pokemon === null) {
               return (
                    <div>Did not load</div>
               )
          } else {
               return (
                    <div>
                         {this.state.pokemon.map(mon => (
                              <PokeCards
                                   name={mon.name}
                                   picture={mon.picture}
                                   // evolution={"Evolves: " + mon.evolution}
                                   type={mon.type}
                                   entryNum={mon.entryNum}
                                   color={mon.color}
                                   pokeLink={url + mon.name}
                              ></PokeCards>
                         ))}
                    </div>
               );
          }
     }
}
