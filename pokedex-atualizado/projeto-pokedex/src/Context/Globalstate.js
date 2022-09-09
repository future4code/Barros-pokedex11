import React from "react";
import { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {

    const [pokedex, setPokedex] = useState([]);




    // aqui guardamos a info do adicionar?



    //organização:


    const states = { pokedex }
    const setters = { setPokedex }

    return (
        <GlobalStateContext.Provider value={{ states, setters }}>

            {props.children}
        </GlobalStateContext.Provider>
    )

}

export default GlobalState;