import React from 'react';
import ReactDOM from 'react-dom';
import "./tailwind.output.css";

import PokeList from "./Components/PokeList"

const App = () => (
    <PokeList />
);

ReactDOM.render(<App />, document.querySelector('#root'));