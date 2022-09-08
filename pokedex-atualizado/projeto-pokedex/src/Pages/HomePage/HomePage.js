import { React, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { PokeCard } from "../../Components/PokeCard/PokeCard";
import { goToDetails, goToPokedex } from "../../Routes/Cordinator";
import { BASE_URL } from "../../Constants/Constants";
import { Buttons, Container, DivButtons, Global, Title } from "./style.js";
import pokemoon from "../../img/pokemon.png"
import UseRequestData from "../../Components/Hooks/UseRequestData";

export function HomePage() {
  const navigate = useNavigate();
  const [id] = useState("");
  const [dataPokemon] = UseRequestData(`${BASE_URL}`);
  const pokeId = useParams();
  let allPokemons = [];

  const getPokemons = () => {
    for (let id = 1; id < 21; id++) {
      const [data] = UseRequestData(`${BASE_URL}` + id);

      allPokemons.push({ data });

    }
    return allPokemons;
  };

  getPokemons();

  return (
    <Global>
      
            <Title src={pokemoon}></Title>
        
          <DivButtons>
            <Buttons
              onClick={() => goToPokedex(navigate)}>Ir para Pokedex
            </Buttons>
          </DivButtons>

      <Container>
        
          {allPokemons &&
            allPokemons.map((pokemon) => {
              return (
                <PokeCard
                  name={pokemon.data && pokemon.data.name}
                  image={pokemon.data && pokemon.data.sprites.versions["generation-v"]["black-white"].animated.front_default}
                  alt={pokemon.data && pokemon.data.name}
                  onClick={() => goToDetails(navigate)}
                  pokeId={pokemon.data && pokemon.data.id}
                />
              );
            })}
        
      </Container>
    </Global>
  );
}
