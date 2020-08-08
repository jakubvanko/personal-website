import React from "react";

import {Container, FooterText, CopyrightContainer} from "./Footer.styled";
import SectionLine from "../../components/SectionLine/SectionLine";

import resume from "./assets/resume.pdf";

const Footer = () => (
    <Container>
        <SectionLine $color={"#2F4961"}/>
        <FooterText as={"a"} href={resume} download={"Vanko_Jakub_CV"}>Download my resumé</FooterText>
        <CopyrightContainer>
            <FooterText>© 2020 Jakub Vanko, Slovakia</FooterText>
        </CopyrightContainer>
    </Container>
);

export default Footer;
