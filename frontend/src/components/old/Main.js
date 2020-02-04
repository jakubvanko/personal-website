import React from "react";

import "../main.css";

import Section from "./old/Section/Section";
import HeaderAdditional from "./old/HeaderAdditional/HeaderAdditional";
import ContactGroup from "./old/ContactGroup/ContactGroup";
import FormContact from "./old/FormContact/FormContact";
import Footer from "./old/Footer/Footer";

const Main = () => (
    <>
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
