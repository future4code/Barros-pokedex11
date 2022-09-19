import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Pokedex } from "../../Pages/Pokedex/Pokedex.js";
import "./style.js";
import { ButtonLeft, ButtonRight, DivButtons, DivCard, Imagem, PokeName } from "./style.js";

export function PokeCard(props) {
  const navigate = useNavigate();
  const pokeId = useParams();

  const goToStats = (pokeId) => {
    navigate(`/details/${pokeId}`);
  };

  const addPokedex = (pokeId) => {
    //adiciona pokeID ao array pokedex
    localStorage.setItem("pokedex", [])

    alert(pokeId)
  }

  return (

    <DivCard>
      <PokeName>{props.name}</PokeName>
      <Imagem

        src={props.image}
        alt={props.alt}
      />
      <DivButtons>
        <ButtonLeft onClick={() => addPokedex(props.pokeId)}>Adicionar</ButtonLeft>
        <ButtonRight onClick={() => (goToStats(props.pokeId))}>Ver Detalhes</ButtonRight>
      </DivButtons>
    </DivCard>

  );
}
