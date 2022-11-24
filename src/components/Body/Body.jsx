import React from "react";
import { Routes, Route } from "react-router-dom";

import './Body.css';

import Home from "../../containers/Home/Home";
import Locations from "../../containers/Locations/Locations";
import Episodes from "../../containers/Episodes/Episodes";

const Body = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/episodes" element={<Episodes />} />
                <Route path="/locations" element={<Locations />} />
            </Routes>
        </>);

}

export default Body;