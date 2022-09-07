import React from "react";
import { HomePage } from "../Pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Details } from "../Pages/Details/Details";
import { Pokedex } from "../Pages/Pokedex/Pokedex";


export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="details/" element={<Details />} />
                <Route path="pokedex" element={<Pokedex />} />
            </Routes>
        </BrowserRouter>
    )
}

