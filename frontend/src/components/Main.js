import React from "react";

import "./main.css"

import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "../scenes/Contact";
import Footer from "../scenes/Footer";

const Main = () => (
    <>
        <Header/>
        <Home/>
        <About/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </>
);

export default Main;
