import React, {Suspense} from "react";
import {ScrollLink} from "react-scroll/modules";

import {
    Container,
    CenteredIconButton,
    TitleBold,
    TitleThin,
    AdditionalText,
    TextContainer
} from "./Home.styled";
import useWindowDimensions from "../../scripts/hooks/useWindowDimensions";

const AnimatedBackground = React.lazy(() => import("./components/AnimatedBackground"));

const ScrollIcon = ScrollLink(CenteredIconButton);

const Home = () => {
    const [width] = useWindowDimensions();

    return (
        <Container id={"home"}>
            <TextContainer>
                <TitleThin>Jakub</TitleThin>
                <TitleBold>Vanko</TitleBold>
                <AdditionalText>Developer • Programmer • Consultant</AdditionalText>
            </TextContainer>
            {width > 991 && (
                <Suspense fallback={<div style={{backgroundColor: "red"}}/>}>
                    <AnimatedBackground/>
                </Suspense>)}
            <ScrollIcon to={"about"} smooth={true} name={"arrow"} aria-label={"go to about"}/>
        </Container>
    )
};

export default Home;
