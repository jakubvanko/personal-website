import React from "react";

import {
    Container,
    StickyHeadingContainer,
    ProjectContainer,
    ProjectHeading,
    ProjectDataContainer,
    AllProjectsContainer
} from "./Portfolio.styled";
import SectionLine from "../../components/SectionLine/SectionLine";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";

const PROJECTS = [{
    title: "Spektrum",
    text: `A full-stack web application for concert venue and ticket ordering. 
    Written in MERN stack and includes a RESTful web API, GraphQL endpoint, token 
    login system, form validation and a custom content management system.`,
    linkLive: "",
    linkCode: "https://github.com/jakubvanko/spektrum"
}, {
    title: "CommonCore Plugins",
    text: `Java game plugins downloaded over 6000+ times and currently running on 100+ servers.
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

const Portfolio = () => (
    <Container id={"portfolio"}>
        <SectionLine $color={"#D6ACD5"}/>
        <StickyHeadingContainer>
            <Heading>Portfolio</Heading>
        </StickyHeadingContainer>
        <AllProjectsContainer>
            {PROJECTS.map(({title, text, linkLive, linkCode}) => (
                <ProjectContainer key={title}>
                    <ProjectHeading>{title}</ProjectHeading>
                    <ProjectDataContainer>
                        <Text $gridArea={"text"}>{text}</Text>
                        <Button $gridArea={"live"}>Live version</Button>
                        <Button $gridArea={"code"}>Code</Button>
                    </ProjectDataContainer>
                </ProjectContainer>
            ))}
        </AllProjectsContainer>
    </Container>
);

export default Portfolio;
