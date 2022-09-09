import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { BASE_URL } from '../Hooks/constants ';
import { GlobalPokemonsContext } from './globalStateContext';

function GlobalState(props) {
    const [ pokemons, setPokemons ] = useState([])
    const [ pokeDetail, setPokeDetail ] = useState([])
    const [ pokedex, setPokedex ] = useState([])

    const data = {
      pokemons,
      setPokemons,
      pokeDetail,
      setPokeDetail,
      pokedex,
      setPokedex,
    }
      
    
      
    

 return (
   <GlobalPokemonsContext.Provider value={data}>
        {props.children}
   </GlobalPokemonsContext.Provider>
 );
}

export default GlobalState