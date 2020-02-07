import React from "react";

import {Container, FooterText, CopyrightContainer} from "./Footer.styled";
import SectionLine from "../SectionLine/SectionLine";

const Footer = () => (
    <Container>
        <SectionLine $color={"#2F4961"}/>
        <FooterText as={"a"}>Download my resumé</FooterText>
        <CopyrightContainer>
            <FooterText>© 2020 Jakub Vanko, Slovakia</FooterText>
        </CopyrightContainer>
    </Container>
);

export default Footer;
