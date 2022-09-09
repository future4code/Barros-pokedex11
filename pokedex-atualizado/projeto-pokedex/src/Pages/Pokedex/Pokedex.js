import React from "react";
import { useNavigate } from "react-router-dom";
import { goToBack, goToDetails, goToHome } from "../../Routes/Cordinator";
import pokedex from "../../img/pokedex.png"
import { Buttons, Container, DivButtons, Global, Title } from "./style";
import axios from "axios";
import { PokedexCard } from "../../Components/PokedexCard/PokedexCard";
import { BASE_URL } from "../../Constants/Constants";

export function Pokedex() {
  const navigate = useNavigate()
  const idPokedex = [];

  const getPokedex = () => {
    axios.get(`${BASE_URL}`)
  }

  return (

    <Global>

      <DivButtons>
        <Buttons onClick={() => goToHome(navigate)}>Voltar</Buttons>
      </DivButtons>

      <Title src={pokedex}></Title>

      <Container>

        <PokedexCard />
      </Container>

    </Global>

  );
}