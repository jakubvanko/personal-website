import React from "react";

import {Container, StickyHeadingContainer, ProjectContainer, ProjectHeading, Text, Button} from "./Portfolio.styled";
import SectionLine from "../SectionLine/SectionLine";
import Heading from "../Heading/Heading";

const PROJECTS = [{
    title: "Spektrum",
    text: `A full-stack web application for concert venue and ticket ordering. 
    Written in MERN stack and includes a RESTful web API, GraphQL endpoint, token 
    login system, form validation and a custom content management system.`,
    linkLive: "",
    linkCode: "https://github.com/jakubvanko/spektrum"
}, {
    title: "CommonCore Plugins",
    text: `Java game plugins downloaded over 6000+ times and used on 100+ servers. 
    Includes a custom code library, complete user configurability, support for 3rd party 
    modifications, full documentation and tutorials.`,
    linkLive: "",
    linkCode: "https://github.com/jakubvanko/minecraft-plugins"
}, {
    title: "Minecraft Gender Rec.",
    text: `A web application for AI gender recognition of Minecraft player skins. 
    Written in MERN stack and includes a RESTful web API, GraphQL endpoint, custom 
    dataset, multiple machine learning algorithms and 3rd party API integration.`,
    linkLive: "",
    linkCode: "https://github.com/jakubvanko/project-minecraft-gender"
}];

/*
{PROJECTS.map(({title, text, linkLive, linkCode}) => (

            /*<ProjectContainer>
                <ProjectTitle></ProjectTitle>
                <Button></Button>
                <Text></Text>
                <Button></Button>
            </ProjectContainer>
))}
 */


const Portfolio = () => (
    <Container id={"portfolio"}>
        <SectionLine $color={"#D6ACD5"}/>
        <StickyHeadingContainer>
            <Heading>Portfolio</Heading>
        </StickyHeadingContainer>
        <ProjectContainer>
            <ProjectHeading>
                Spektrum
            </ProjectHeading>
            <Text>
                A full-stack web application for concert venue and ticket ordering.
                Written in MERN stack and includes a RESTful web API, GraphQL endpoint, token
                login system, form validation and a custom content management system.
            </Text>
        </ProjectContainer>
    </Container>
);

export default Portfolio;
