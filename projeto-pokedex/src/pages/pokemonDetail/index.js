import axios from "axios";
import React, { useContext, useEffect } from "react";
import TittleContainer from "../../components/tittle";
import { GlobalPokemonsContext } from "../../context/globalStateContext";
import { BASE_URL } from "../../Hooks/constants ";
import { LayoutContainer } from "../../style";
import { ImagemCamp, MovesCamp, PokemonDetailMain, StatsCamp, TypeMoveCamp, TypesCamp } from "./style";

function PokemonDetails(){
 
    const context = useContext(GlobalPokemonsContext)
    console.log(context.pokeDetail);

    useEffect(()=>{
        axios
            .get(`${BASE_URL}pokemon/${localStorage.getItem("nameDetail")}`)
            .then((resp)=>{
            context.setPokeDetail([resp.data])
    })
    },[])

    const detailPok = context.pokeDetail && context.pokeDetail.map((pokemon, i)=>{
        console.log(pokemon);
        return(
            <PokemonDetailMain key={i}>
                <ImagemCamp>
                        <img src={pokemon.sprites.front_default}/>
                        <img src={pokemon.sprites.back_default}/>
                </ImagemCamp>
                <StatsCamp>
                    <h2>Habilidades</h2>
                    {pokemon.stats.map((stat)=>{
                        return(
                            <div>
                                <label>{stat.stat.name}</label>
                                <p>{stat.base_stat}</p>   
                            </div>
                        )
                    })}
                    </StatsCamp>
                    <TypeMoveCamp>
                        <TypesCamp>
                            {pokemon.types.map((type, i)=>{
                                return(
                                    <div key={i}>
                                        <label>Tipo:</label>
                                        <p>{type.type.name}</p>
                                    </div>
                                )
                            })}
                        </TypesCamp>
                        <MovesCamp>
                                <h2>Movimentos</h2>
                                <p>{pokemon.moves[0].move.name}</p>
                                <p>{pokemon.moves[1].move.name}</p>
                                <p>{pokemon.moves[2].move.name}</p>
                                <p>{pokemon.moves[3].move.name}</p>
                                <p>{pokemon.moves[4].move.name}</p>
                        </MovesCamp>
                    </TypeMoveCamp>
            </PokemonDetailMain>
        )
    })

    return(
        <LayoutContainer>
            <TittleContainer/>
                {detailPok}
           
        </LayoutContainer>
    )
}

export default PokemonDetails