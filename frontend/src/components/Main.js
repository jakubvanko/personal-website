import React from "react";

import "./main.css"

import Header from "./Header/Header";
import Home from "../scenes/Home";
import About from "../scenes/About";
import Portfolio from "../scenes/Portfolio";
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
