import React, { useContext } from "react";
import { TittleCamp } from "./style";
import {useNavigate} from "react-router-dom"
import ImgPokebola from "../../imgs/pokebola.png"
import ImgPikachu from "../../imgs/pikachu.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalPokemonsContext } from "../../context/globalStateContext";

function TittleContainer (){
    const context = useContext(GlobalPokemonsContext)
    const navigate = useNavigate()

    const goToPokedex = ()=>{
        context.pokedex.length === 0 ? toast.error("lista de pokedex vazia!") : navigate("/pokedex") 
    }

    const goToPokemons = ()=>{
        navigate("/Listadepokemons")
    }

    return(
        <TittleCamp>
            {/* <button onClick={(()=>{navigate("/ListaDePokemons")})}>lista de pokemon</button> */}
            <img id="pokebolaIcon" src={ImgPokebola} onClick={goToPokedex}/>
            <h1>POKEMON</h1>
            <ToastContainer/>
            <img id="pikachuIcon" src={ImgPikachu} onClick={goToPokemons}/>
        </TittleCamp>
    )
}

export default TittleContainer