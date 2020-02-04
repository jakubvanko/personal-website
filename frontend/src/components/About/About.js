import React from "react";

import {Container, SubHeading, ListContainer, ListText} from "./About.styled";
import SectionLine from "../SectionLine/SectionLine";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";

const TEXT = `
I am a full-stack software developer with programming experience of over 3 years. 
My main focal point is the utilization of modern web technologies along with time-tested 
programming methodologies to provide users with a spectacular browsing experience. 
I am also passionate about experimenting with cutting-edge techniques such as machine learning 
to push my endeavours into the tiers of the highest quality.
`;

const AREAS = ["• Javascript (React, Redux, Apollo)", "• Node.js (Express, GraphQL, REST)",
    "• Java (OOP, design patterns, UML)"];

const CERTIFICATIONS = [{
    text: "• C2 in Cambridge Advanced English",
    link: ""
}, {
    text: "• Machine Learning by Coursera",
    link: ""
}, {
    text: "• Cryptography by Coursera",
    link: ""
}];

const About = () => (
    <Container id={"about"}>
        <SectionLine $color={"#525F95"} />
        <Heading>About me</Heading>
        <Text>{TEXT}</Text>
        <ListContainer>
            <div>
                <SubHeading>Areas of expertise</SubHeading>
                {AREAS.map(text => <ListText key={text}>{text}</ListText>)}
            </div>
            <div>
                <SubHeading>Certifications</SubHeading>
                {CERTIFICATIONS.map(({text, link}) => <ListText as={"a"} href={link} target={"_blank"}
                                                            rel={"noopener noreferrer"}
                                                            key={text}>{text}</ListText>)}
            </div>
        </ListContainer>
    </Container>
);

export default About;
