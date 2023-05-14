import React from "react";

import "./main.css"

import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";

const Main = () => (
    <>
        <Header/>
        <Home/>
        <About/>
        <Portfolio/>
        <Contact/>
    </>
);

export default Main;
