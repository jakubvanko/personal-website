import React from "react";

import "../main.css";

import Section from "./old/Section/Section";
import HeaderAdditional from "./old/HeaderAdditional/HeaderAdditional";
import Project from "./old/Project/Project";
import ContactGroup from "./old/ContactGroup/ContactGroup";
import FormContact from "./old/FormContact/FormContact";
import Footer from "./old/Footer/Footer";

const Main = () => (
    <>
        <Section header={"Portfolio"} color={"#D6ACD5"}>
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
        <Section header={"Contact"} color={"#2F4961"}>
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
