import React from 'react';
import ReactDOM from 'react-dom';
import "./tailwind.output.css";

import PokeCards from "./Components/PokeCard"
import PokeList from "./Components/PokeList"
// import WorkCation from "./Components/WorkCation"

let colorPicker = (type) => {
  switch (type) {
    case "grass":
      return "bg-green-300";
    case "fire":
      return "bg-red-300";
    case "water":
      return "bg-blue-300";
    default:
      return "bg-gray-300";
  }
};

const url = "https://www.pokemon.com/us/pokedex/";

const Pokemon = [
  {
    name: "Bulbasaur",
    type: "grass",
    evolution: true,
    picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    entryNum: "1",
    color: colorPicker("grass"),
    pokedexLink: url + "Bulbasaur",
  },
  {
    name: "Charmander",
    type: "fire",
    evolution: true,
    picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    entryNum: "4",
    color: colorPicker("fire"),
    pokedexLink: url + "Charmander",
  },
  {
    name: "Squirtle",
    type: "water",
    evolution: true,
    picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    entryNum: "7",
    color: colorPicker("water"),
    pokedexLink: url + "Squirtle"
  },
];


const App = () => (
  <div className="bg-purple-600 h-screen">
    <PokeList></PokeList>
    {/* <WorkCation></WorkCation> */}
    {/* Below we use .map to render each PokeCard. Each PokeCard has several props that are passed to it. */}
      {Pokemon.map((mon, i) => (
        <PokeCards
          pokeLink={mon.pokedexLink}
          picture={mon.picture}
          evolution={"Evolves: " + mon.evolution}
          type={mon.type}
          entryNum={mon.entryNum}
          color={mon.color}
        ></PokeCards>
      ))}
  </div>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ReactDOM.render(<App />, document.querySelector('#root'));