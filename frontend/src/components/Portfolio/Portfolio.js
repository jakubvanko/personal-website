import React from "react";

import {Container, StickyHeadingContainer} from "./Portfolio.styled";
import SectionLine from "../SectionLine/SectionLine";
import Heading from "../Heading/Heading";

const Portfolio = () => (
    <Container id={"portfolio"}>
        <SectionLine $color={"#D6ACD5"}/>
        <StickyHeadingContainer>
            <Heading>Portfolio</Heading>
        </StickyHeadingContainer>
    </Container>
);

export default Portfolio;
