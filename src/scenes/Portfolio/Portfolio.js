import React from "react";

import {
    AllProjectsContainer,
    Container,
    ProjectContainer,
    ProjectDataContainer,
    ProjectHeading,
    StickyHeadingContainer
} from "./Portfolio.styled";
import SectionLine from "../../components/SectionLine/SectionLine";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";

const PROJECTS = [{
    title: "Bachelor's Thesis",
    text: `A full-stack web application for providing data packages of medical images.
    Developed using MERN stack and designed to be used by 100 users every month,
    saving the university over €700 per year.`,
    linkLive: "https://is.muni.cz/th/onf8p/",
    linkCode: "https://github.com/jakubvanko/mafil-volunteer-data-giver",
    textLive: "Thesis Text"
}, {
    title: "Sphaera",
    text: `A full-stack web application for concert venue and ticket ordering. 
    Written in MERN stack and includes a REST API, GraphQL endpoint, token 
    login system, form validation and a custom content management system.`,
    linkLive: "https://sphaera.jakubvanko.com",
    linkCode: "https://github.com/jakubvanko/sphaera"
}, {
    title: "CommonCore Plugins",
    text: `Java game plugins downloaded over 10,000 times and currently running on over 100 servers.
    Includes a custom code library, complete configurability, support for 3rd party
    modifications, full documentation and a website created using React.`,
    linkLive: "https://commoncore.jakubvanko.com",
    linkCode: "https://github.com/jakubvanko/commoncore"
}];

const openLink = (link) => (() => window.open(link));

const Portfolio = () => (
    <Container id={"portfolio"}>
        <SectionLine $color={"#D6ACD5"}/>
        <StickyHeadingContainer>
            <Heading>Portfolio</Heading>
        </StickyHeadingContainer>
        <AllProjectsContainer>
            {PROJECTS.map(({title, text, linkLive, linkCode, textLive = "Live version", textCode = "Code"}) => (
                <ProjectContainer key={title}>
                    <ProjectHeading>{title}</ProjectHeading>
                    <ProjectDataContainer>
                        <Text $gridArea={"text"}>{text}</Text>
                        <Button $gridArea={"live"} onClick={openLink(linkLive)}>{textLive}</Button>
                        <Button $gridArea={"code"} onClick={openLink(linkCode)}>{textCode}</Button>
                    </ProjectDataContainer>
                </ProjectContainer>
            ))}
        </AllProjectsContainer>
    </Container>
);

export default Portfolio;
