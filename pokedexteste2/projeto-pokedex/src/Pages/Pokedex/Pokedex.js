import React from "react";
import { useNavigate } from "react-router-dom";
import {PokeCard} from "../../Components/PokeCard/PokeCard"
import { goToBack, goToDetails } from "../../Routes/Cordinator";
import pokedex from "../../img/pokedex.png"
import { Buttons, Container, DivButtons, Global, Title } from "./style";

export function Pokedex() {
    const navigate = useNavigate()
    
    return (
      
        <Global>
          
            <DivButtons>
              <Buttons onClick={() => goToBack(navigate)}>Voltar</Buttons>
            </DivButtons>
            
              <Title src={pokedex}></Title>
            
          <Container>
            <PokeCard
              image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
              onClick={() => goToDetails(navigate)}
            />
            <PokeCard
              image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png"
              onClick={() => goToDetails(navigate)}
            />
            <PokeCard
              image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
              onClick={() => goToDetails(navigate)}
            />
          </Container>
        
        </Global>
      
    );
}