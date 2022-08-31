import React from "react";
import TittleContainer from "../../components/tittle";
import {LayoutContainer} from "../../style"

function PokemonList(){
    return(
        <LayoutContainer>
            <TittleContainer/>
            <h1>Lista de Pokemons</h1>
        </LayoutContainer>
    )
}

export default PokemonList