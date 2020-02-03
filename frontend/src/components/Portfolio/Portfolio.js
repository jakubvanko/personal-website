import React from "react";

import {Container} from "./Portfolio.styled";
import SectionLine from "../SectionLine/SectionLine";
import Heading from "../Heading/Heading";

const Portfolio = () => (
    <Container id={"portfolio"}>
        <SectionLine $color={"#D6ACD5"}/>
        <Heading>Portfolio</Heading>
    </Container>
);

export default Portfolio;
