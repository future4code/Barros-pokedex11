import React, { useState, useEffect } from "react";
import UseRequestData from "../Hooks/UseRequestData";
import { BASE_URL } from "../../Constants/Constants";
import axios from "axios"




export default function PokeDetail() {

    const [data] = UseRequestData(`${BASE_URL}${localStorage.getItem("pokeId")}`)
    console.log(localStorage.getItem("pokeId"))
    const [render, setRender] = useState([])


    useEffect(() => {
        axios.get(`${BASE_URL}${localStorage.getItem("pokeId")}`)
            .then((response) => {
                console.log(response.data);
                setRender(response.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <>
            {render.map((poke) => { })}
        </>
    )
}