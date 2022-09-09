import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalPokemonsContext } from "../../context/globalStateContext";
import { BASE_URL } from "../../Hooks/constants ";
import { ButtonCard, CardPok, ImageCard, NameCard } from "./style";
import AddImg from "../../imgs/adicionar.png"
import InfoImg from "../../imgs/info.png"

function PokemonCard ({name,image, pokeId}){
    const navigate = useNavigate()
    const context = useContext(GlobalPokemonsContext)
           

    const addPokedex = ()=>{
        localStorage.setItem("nameDetail", name)
        axios
        .get(`${BASE_URL}pokemon/${name}`)
        .then((resp)=>{
        context.setPokedex([...context.pokedex, resp.data])
    })
    }

    const detailsPok = ()=>{
        localStorage.setItem("nameDetail", name)
        navigate("/detalhesdopokemon")
    }


    return(
        <CardPok>
            <NameCard><h2>{name}</h2></NameCard>
            <ImageCard><img src={image}/></ImageCard>
            <ButtonCard>
                <img src={InfoImg} onClick={detailsPok}/>
                <img src={AddImg} onClick={addPokedex}/>
            </ButtonCard>
        </CardPok>
    )
}

export default PokemonCard