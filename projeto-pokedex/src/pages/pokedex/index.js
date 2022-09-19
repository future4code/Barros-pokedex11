import React, { useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import TittleContainer from "../../components/tittle";
import { GlobalPokemonsContext } from "../../context/globalStateContext";
import { LayoutContainer } from "../../style";
import { ButtonCard, ImageCard, NameCard, PokeCardBase, PokedexMain } from "./style";
import InfoImg from "../../imgs/info.png"
import DelImg from "../../imgs/remove.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Pokedex(){
    const context = useContext(GlobalPokemonsContext)
    const navigate = useNavigate()

    const removePokemon = (name)=>{
        const remove = context.pokedex.filter((pokemon)=>name !== pokemon.name)
        context.setPokedex(remove)
        toast.success("pokemon Removido!")
    }
    const detailsPok = (name)=>{
        localStorage.setItem("nameDetail", name)
        navigate("/detalhesdopokemon")
    }

    const listPoke = context.pokedex && context.pokedex.map((pokemon, i)=>{
        return(
            <PokeCardBase key={i}>
                <NameCard>
                    <h2>{pokemon.name}</h2>
                </NameCard>
                <ImageCard>
                    <img src={pokemon.sprites.front_default}/>
                </ImageCard>
                <ButtonCard>
                    <img src={DelImg} onClick={()=>{removePokemon(pokemon.name)}}/>
                    <img src={InfoImg} onClick={()=>{detailsPok(pokemon.name)}}/>
                </ButtonCard>
            </PokeCardBase>
        )
    })

    return(
        <LayoutContainer>
            <TittleContainer/>
            <PokedexMain>
                {listPoke}
            </PokedexMain>
            <ToastContainer/>
        </LayoutContainer>
    )
}

export default Pokedex