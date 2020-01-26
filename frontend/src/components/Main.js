import React from "react";

import "./main.css";

import Navbar from "./Navbar/Navbar";
import HeaderTitle from "./HeaderTitle/HeaderTitle";
import ButtonArrow from "./ButtonArrow/ButtonArrow";
import Section from "./Section/Section";
import TextBasic from "./TextBasic/TextBasic";
import HeaderAdditional from "./HeaderAdditional/HeaderAdditional";
import Project from "./Project/Project";
import TextGroup from "./TextGroup/TextGroup";
import ContactGroup from "./ContactGroup/ContactGroup";
import FormContact from "./FormContact/FormContact";
import Footer from "./Footer/Footer";

const Main = () => (
    <>
        <Navbar/>
        <HeaderTitle/>
        <ButtonArrow/>
        <Section header={"About me"}>
            <TextGroup>
                <TextBasic>
                    I am a full-stack software developer with programming experience of over 3 years. I specialize in
                    utilizing modern web technologies to provide users with a seamless browsing experience. My main
                    focal
                    point is the MERN stack (Mongo, Express, React and Node.js), but I also do not shy away from trying
                    out
                    other cutting-edge technologies such as machine learning to push my endeavours into the tiers of the
                    highest quality.
                </TextBasic>
            </TextGroup>
            <HeaderAdditional>
                Areas of expertise
            </HeaderAdditional>
            <TextGroup>
                <TextBasic>
                    • Javascript (React, Redux, Apollo)
                </TextBasic>
                <TextBasic>
                    • Node.js (Express, GraphQL, REST)
                </TextBasic>
                <TextBasic>
                    • Java (OOP, design patterns, UML)
                </TextBasic>
            </TextGroup>
            <HeaderAdditional>
                Certifications
            </HeaderAdditional>
            <TextGroup>
                <TextBasic>
                    • C2 in Cambridge Advanced English
                </TextBasic>
                <TextBasic>
                    • Machine Learning by Coursera
                </TextBasic>
                <TextBasic>
                    • Cryptography by Coursera
                </TextBasic>
            </TextGroup>
        </Section>
        <Section header={"Portfolio"}>
            <Project header={"Spektrum"}>
                A full-stack web application for concert venue and ticket ordering. Includes a RESTful web API,
                GraphQL
                endpoint, token login system, form validation and a custom content management system.
            </Project>
            <Project header={"CommonCore Plugins"}>
                A full-stack web application for concert venue and ticket ordering. Includes a RESTful web API,
                GraphQL
                endpoint, token login system, form validation and a custom content management system.
            </Project>
            <Project header={"Minecraft Gender Rec."}>
                A full-stack web application for concert venue and ticket ordering. Includes a RESTful web API,
                GraphQL
                endpoint, token login system, form validation and a custom content management system.
            </Project>
        </Section>
        <Section header={"Contact"}>
            <ContactGroup/>
            <HeaderAdditional>
                Send me a message
            </HeaderAdditional>
            <FormContact/>
        </Section>
        <Footer/>
    </>
);

export default Main;
