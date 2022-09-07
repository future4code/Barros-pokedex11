import React from "react";
import UseRequestData from "../../Components/Hooks/UseRequestData";
import { BASE_URL } from "../../Constants/Constants";
import PokeDetail from "../../Components/PokeDetail/PokeDetail"
//pegar pokeId do local storage e renderizar um card com o detalhe do pokemon selecionado, botão voltar
export function Details() {
    console.log(localStorage.getItem("pokeId"))


    return (
        <div>
            <h1>Details</h1>

            <PokeDetail />

        </div>

    )
}