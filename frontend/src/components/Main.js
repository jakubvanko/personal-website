import React from "react";

import "./main.css";

import Navbar from "./Navbar/Navbar";
import HeaderTitle from "./HeaderTitle/HeaderTitle";
import ButtonArrow from "./ButtonArrow/ButtonArrow";
import Section from "./Section/Section";
import TextBasic from "./TextBasic/TextBasic";
import HeaderAdditional from "./HeaderAdditional/HeaderAdditional";

const Main = () => (
    <>
        <Navbar/>
        <HeaderTitle/>
        <ButtonArrow/>
        <Section header={"About me"}>
            <TextBasic>
                I am a full-stack software developer with programming experience of over 3 years. I specialize in
                utilizing modern web technologies to provide users with a seamless browsing experience. My main focal
                point is the MERN stack (Mongo, Express, React and Node.js), but I also do not shy away from trying out
                other cutting-edge technologies such as machine learning to push my endeavours into the tiers of the
                highest quality.
            </TextBasic>
            <HeaderAdditional>
                Areas of expertise
            </HeaderAdditional>
            <TextBasic>
                • Javascript (React, Redux, Apollo)
            </TextBasic>
            <TextBasic>
                • Node.js (Express, GraphQL, REST)
            </TextBasic>
            <TextBasic>
                • Java (OOP, design patterns, UML)
            </TextBasic>
            <HeaderAdditional>
                Certifications
            </HeaderAdditional>
            <TextBasic>
                • C2 in Cambridge Advanced English
            </TextBasic>
            <TextBasic>
                • Machine Learning by Coursera
            </TextBasic>
            <TextBasic>
                • Cryptography by Coursera
            </TextBasic>
        </Section>
    </>
);

export default Main;
