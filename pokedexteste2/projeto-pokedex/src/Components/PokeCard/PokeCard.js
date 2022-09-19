import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.js";
import { ButtonLeft, ButtonRight, DivButtons, DivCard, Imagem, PokeName } from "./style.js";

export function PokeCard(props) {
  const navigate = useNavigate();
  const pokeId = useParams();

  const goToStats = (pokeId) => {
    localStorage.setItem("pokeId", pokeId)
    navigate(`/details`);

  };
  // localstorage.setItem("pokeId", pokeId)
  return (

    <DivCard>
      <PokeName>{props.name}</PokeName>
      <Imagem

        src={props.image}
        alt={props.alt}
      />
      <DivButtons>
        <ButtonLeft>Adicionar</ButtonLeft>
        <ButtonRight onClick={() => (goToStats(props.pokeId))}>Ver Detalhes</ButtonRight>

      </DivButtons>
    </DivCard>

  );
}
