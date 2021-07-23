import React from 'react';
import Pokedex from './Pokedex';
import data from './data';
import './App.css';

class App extends React.Component  {
  render() {
    return (
      <div>
          <Pokedex pokemons={data}/>
      </div>
    );
  }
}


export default App;
