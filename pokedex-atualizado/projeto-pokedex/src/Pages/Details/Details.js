import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goToBack, goToPokedex } from "../../Routes/Cordinator";
import { BASE_URL } from "../../Constants/Constants";
import detailsPoke from "../../img/DetailsPoke.png"
import axios from "axios";
import { ButtonLeft, ButtonRight, CardImage, CardSection, Container, ContainerCards, DivButtons, Global, Images, ImgFrontVer, Move, SectDetails, SectStatus, Title } from "./style";
import "./style.css";

export function Details() {
    const navigate = useNavigate()
    const {pokeId} = useParams();
    const [pokemonDetails, setPokemonDetails] = useState()
    
    useEffect(()=>{
    const getPokeDetails = () =>{
      axios.get(`${BASE_URL}${pokeId}`,{
          })
          .then((response)=>{setPokemonDetails(response.data)})
          .catch((erro)=>{console.log(erro)})
  }
      console.log(getPokeDetails())
  },[`${BASE_URL}${pokeId}`])


  const nome = pokemonDetails && pokemonDetails.species.name
  const hp = pokemonDetails && pokemonDetails.stats && pokemonDetails.stats['0'].base_stat
  const ataque = pokemonDetails && pokemonDetails.stats && pokemonDetails.stats['1'].base_stat
  const defesa = pokemonDetails && pokemonDetails.stats && pokemonDetails.stats['2'].base_stat
  const ataqueEspecial = pokemonDetails && pokemonDetails.stats && pokemonDetails.stats['3'].base_stat
  const defesaEspecial = pokemonDetails && pokemonDetails.stats && pokemonDetails.stats['4'].base_stat
  const velocidade = pokemonDetails && pokemonDetails.stats && pokemonDetails.stats['5'].base_stat
  const imagemFrente = pokemonDetails && pokemonDetails.sprites && pokemonDetails.sprites.versions["generation-v"]["black-white"].animated.front_default
  const imagemTraz = pokemonDetails && pokemonDetails.sprites && pokemonDetails.sprites.versions["generation-v"]["black-white"].animated.back_default
  const typePoke = pokemonDetails && pokemonDetails.types && pokemonDetails.types.map((tipo) => {
      return(
          <span>{tipo.type.nome}</span>
          )
      })
      
  const moves = pokemonDetails && pokemonDetails.moves && pokemonDetails.moves.map((move)=>{
    return(
      <p>{move.move.name}</p>
    )
  })
  return (
    <Global>
        
           <Title src={detailsPoke}></Title>

           <DivButtons>
              <ButtonLeft
                onClick={() => goToBack(navigate)}>Voltar
              </ButtonLeft>

              <ButtonRight
                onClick={() => goToPokedex(navigate)}>Voltar Pokedex
              </ButtonRight>
            </DivButtons>
            
        <ContainerCards>
          <Container>
            <CardSection>
              <CardImage>
              <Images
                  src={imagemFrente}
                  alt="pokemon frente" />
              </CardImage>
              
              <CardImage>
                <Images
                  src={imagemTraz}
                  alt="pokemon costas"/>
            </CardImage>
                  </CardSection>

            <SectStatus>
              <h1>{nome}</h1>
              <p>HP: {hp}</p>
              <p>Attack: {ataque}</p>
              <p>Defense: {defesa}</p>
              <p>Special-atack: {ataqueEspecial}</p>
              <p>Special-defense: {defesaEspecial}</p>
              <p>Speed {velocidade}</p>

            </SectStatus>

            <SectDetails>
              <div>
                <p>Type: {typePoke}</p>
              </div>
              <Move>
                <h5>Moves</h5>
                <p>{moves}</p>
              </Move>
            </SectDetails>
          </Container>
        </ContainerCards>
      </Global>
    );
    
}