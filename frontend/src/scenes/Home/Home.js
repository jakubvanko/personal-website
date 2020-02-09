import React from "react";
import {ScrollLink} from "react-scroll/modules";

import {
    Container,
    CenteredIconButton,
    TitleBold,
    TitleThin,
    PositionedBackground,
    AdditionalText,
    TextContainer
} from "./Home.styled";
import Background from "./components/Background";
import FallingStars from "./components/FallingStars";

import bg_top from "./assets/bg_top.png"
import bg_bottom from "./assets/bg_bottom.jpg"

const ScrollIcon = ScrollLink(CenteredIconButton);

const Home = () => (
    <Container id={"home"}>
        <TextContainer>
            <TitleThin>Jakub</TitleThin>
            <TitleBold>Vanko</TitleBold>
            <AdditionalText>Developer • Programmer • Specialist</AdditionalText>
        </TextContainer>
        <PositionedBackground>
            <Background background={bg_bottom}/>
            <FallingStars/>
            <Background background={bg_top}/>
        </PositionedBackground>
        <ScrollIcon to={"about"} smooth={true} name={"arrow"} aria-label={"go to about"}/>
    </Container>
);

export default Home;
