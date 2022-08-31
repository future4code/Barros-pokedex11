import React from "react";
import styled from "styled-components";
import { TittleCamp } from "./style";
import {useNavigate} from "react-router-dom"

function TittleContainer (){
    const navigate = useNavigate()
    return(
        <TittleCamp>
            <button onClick={(()=>{navigate("/pokedex")})}>pokedex</button>
            <button onClick={(()=>{navigate("/detalhesDoPokemon")})}>detalhes pokemon</button>
            <button onClick={(()=>{navigate("/ListaDePokemons")})}>lista de pokemon</button>
        </TittleCamp>
    )
}

export default TittleContainer