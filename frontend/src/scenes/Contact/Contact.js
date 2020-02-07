import React from "react";
import useWindowDimensions from "../../scripts/hooks/useWindowDimensions";

import {
    Container,
    AllContactsContainer,
    ContactContainer,
    FormContainer,
    SubHeading
} from "./Contact.styled";
import SectionLine from "../../components/SectionLine/SectionLine";
import Heading from "../../components/Heading/Heading";
import Icon from "../../components/Icon/Icon";
import ContactForm from "./components/ContactForm";

const CONTACTS = [{
    icon: "email",
    text: "kubko.vanko@gmail.com",
    link: "mailto:kubko.vanko@gmail.com"
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
                        <Icon name={icon} width={iconDimensions}/>
                        <p>{text}</p>
                    </ContactContainer>
                ))}
            </AllContactsContainer>
            <FormContainer>
                <SubHeading>Send me a message</SubHeading>
                <ContactForm/>
            </FormContainer>
        </Container>
    );
};

export default Contact;
