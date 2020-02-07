import React from "react";
import useWindowDimensions from "../../scripts/hooks/useWindowDimensions";

import {
    Container,
    AllContactsContainer,
    ContactContainer,
    ContactForm,
    TextArea,
    Input,
    FormButton,
    FormContainer,
    SubHeading
} from "./Contact.styled";
import SectionLine from "../../components/SectionLine/SectionLine";
import Heading from "../../components/Heading/Heading";
import Icon from "../../components/Icon/Icon";

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
    const iconDimensions = width < 2400 ? "2em" : "3.5em";

    return (
        <Container id={"contact"}>
            <SectionLine $color={"#2F4961"}/>
            <Heading>Contact</Heading>
            <AllContactsContainer>
                {CONTACTS.map(({icon, text, link}) => (
                    <ContactContainer key={text} href={link} target={"_blank"} rel={"noopener noreferrer"}>
                        <Icon name={icon} height={iconDimensions} width={iconDimensions}/>
                        <p>{text}</p>
                    </ContactContainer>
                ))}
            </AllContactsContainer>
            <FormContainer>
                <SubHeading>Send me a message</SubHeading>
                <ContactForm>
                    <Input placeholder={"NAME"}/>
                    <Input placeholder={"EMAIL"}/>
                    <TextArea placeholder={"MESSAGE"}/>
                    <FormButton>Send message</FormButton>
                </ContactForm>
            </FormContainer>
        </Container>
    );
};

export default Contact;
