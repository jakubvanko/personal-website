import React from "react";
import useWindowDimensions from "../../scripts/hooks/useWindowDimensions";

import {
    Container,
    AllContactsContainer,
    ContactContainer,
    ResumeContainer,
    SubHeading,
    DownloadResumeContainer
} from "./Contact.styled";
import SectionLine from "../../components/SectionLine/SectionLine";
import Heading from "../../components/Heading/Heading";
import Icon from "../../components/Icon/Icon";
import resumeimg from "./assets/resumeimg.jpg";
import resume from "./assets/resume.pdf";

const CONTACTS = [{
    icon: "email",
    text: "business@jakubvanko.com",
    link: "mailto:business@jakubvanko.com"
}, {
    icon: "linkedin",
    text: "linkedin.com/in/jakubvanko",
    link: "https://www.linkedin.com/in/jakubvanko/"
}, {
    icon: "github",
    text: "github.com/jakubvanko",
    link: "https://github.com/jakubvanko"
}];

const Contact = () => {
    const [width] = useWindowDimensions();
    const iconDimensions = width < 993 ? 18 : width < 2400 ? 26 : width < 3400 ? 60 : 100;

    return (
        <Container id={"contact"}>
            <SectionLine $color={"#2F4961"}/>
            <Heading>Contact</Heading>
            <AllContactsContainer>
                {CONTACTS.map(({icon, text, link}) => (
                    <ContactContainer key={text} href={link} target={"_blank"} rel={"noopener noreferrer"}>
                        <Icon aria-label={icon} name={icon} width={iconDimensions}/>
                        <p>{text}</p>
                    </ContactContainer>
                ))}
            </AllContactsContainer>
            <ResumeContainer as={"a"} href={resume} download={"Vanko_Jakub_CV"}>
                <SubHeading>Download my resumé</SubHeading>
                <DownloadResumeContainer src={resumeimg}/>
            </ResumeContainer>
        </Container>
    );
};

export default Contact;
