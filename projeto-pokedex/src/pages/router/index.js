import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom"
import PokemonDetails from "../pokemonDetail"
import Pokedex from "../pokedex"
import PokemonList from "../pokemonsList";

function Router (){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<PokemonList/>}/>
                <Route path="/ListaDePokemons" element={<PokemonList/>}/>
                <Route path="/DetalhesDoPokemon" element={<PokemonDetails/>}/>
                <Route path="/Pokedex" element={<Pokedex/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router