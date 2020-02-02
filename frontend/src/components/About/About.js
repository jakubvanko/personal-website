import React from "react";

import {Container, Heading, Text, SubHeading} from "./About.styled";

const TEXT = `
I am a full-stack software developer with programming experience of over 3 years. 
I specialize in utilizing modern web technologies to provide users with a seamless browsing experience. 
My main focal point is the MERN stack (Mongo, Express, React and Node.js), 
but I also do not shy away from trying out other cutting-edge technologies such as machine learning 
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
        <Heading>About me</Heading>
        <Text>{TEXT}</Text>
        <SubHeading>Areas of expertise</SubHeading>
        {AREAS.map(text => <Text key={text}>{text}</Text>)}
        <SubHeading>Certifications</SubHeading>
        {CERTIFICATIONS.map(({text, link}) => <Text as={"a"} href={link} target={"_blank"} rel={"noopener noreferrer"}
                                                    key={text}>{text}</Text>)}
    </Container>
);

export default About;
