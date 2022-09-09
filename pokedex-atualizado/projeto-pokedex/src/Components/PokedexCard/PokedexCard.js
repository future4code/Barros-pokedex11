import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.js";
import { ButtonLeft, ButtonRight, DivButtons, DivCard, Imagem, PokeName } from "./style.js";

export function PokedexCard(props) {
    const navigate = useNavigate();
    const pokeId = useParams();

    const goToStats = (pokeId) => {
        navigate(`/details/${pokeId}`);
    };

    const addPokedex = (pokeId) => {
        //adiciona pokeID ao array pokedex
    }
    const removePokedex = () => {
        // remove o pokeID do array pokedex
    }
    return (

        <DivCard>
            <PokeName>{props.name}</PokeName>
            <Imagem

                src={props.image}
                alt={props.alt}
            />
            <DivButtons>
                <ButtonLeft onClick={() => removePokedex()}>Remover</ButtonLeft>
                <ButtonRight onClick={() => (goToStats(props.pokeId))}>Ver Detalhes</ButtonRight>
            </DivButtons>
        </DivCard>

    );
}
