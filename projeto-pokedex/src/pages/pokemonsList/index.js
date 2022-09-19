import React, { useContext, useEffect, useState } from "react";
import { PokemonListMain } from "./style";
import { LayoutContainer } from "../../style"
import TittleContainer from "../../components/tittle";
import PokemonCard from "../../components/pokemonCard";
import { BASE_URL } from "../../Hooks/constants ";
import axios from "axios";
import {GlobalPokemonsContext} from "../../context/globalStateContext"

function PokemonList(){
    const context = useContext(GlobalPokemonsContext)
    const [isLoading, setIsLoading] = useState(false)

    const getPokemons = ()=>{
        let endPoints = []
        for(let i=1;i<21;i++){
            endPoints.push(`${BASE_URL}pokemon/${i}`)
        }
        axios.all(endPoints.map((endPoint)=> axios.get(endPoint))).then((resp)=>{context.setPokemons(resp)})
    }

    useEffect(()=>{
        getPokemons()
    },[])

    const listPokemons = context.pokemons.map((poke, index)=>{
        return(
            <PokemonCard key={index}
                name={poke.data.name}
                image = {poke.data.sprites.front_default}
                pokeId = {poke.data.id}
            />
        )
    })

    return(
        <LayoutContainer>
           <TittleContainer/>
           <PokemonListMain>
                {isLoading&&"...Carregando"}
                {!isLoading&&listPokemons}
            </PokemonListMain>
        </LayoutContainer>
    )
}

export default PokemonList