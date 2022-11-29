import React from "react";
import { Routes, Route } from "react-router-dom";

import './Body.css';

import Home from "../../containers/Home/Home";
import Episodes from "../../containers/Episodes/Episodes";
import CharacterDetail from "../../containers/CharacterDetail/CharacterDetail";

const Body = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail" element={<CharacterDetail />} />
                <Route path="/episodes" element={<Episodes />} />
            </Routes>
        </>);

}

export default Body;