import React from "react";
import styled from "styled-components";
import Button from "../../../components/Button/Button";

const Form = styled.form`
    box-shadow: 0 3px 6px #00000066;
    width: 100%;
    height: 50vh;
    min-height: 20em;
    position: relative;
    // Not sure about the margin here
    margin: 1vh 0;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: min-content min-content auto calc(2.4em + 50px);
    
    @media only screen {
        @media (min-height: 790px) {
            grid-template-rows: min-content min-content auto calc(2.4em + 6.4vh);
        }
        @media (min-width: 992px) {
            @media (orientation: portrait) {
                height: 35vh;
                max-width: 45vw;
            }
        }
    }
`;

const TextArea = styled.textarea`
    font-size: max(16px, 1em);
    color: #707070;
    border: none;
    outline: none;
    padding: 1em;
    width: 100%;
    
    @media only screen {
        @media (min-width: 992px) {            
            @media (orientation: portrait) {
                font-size: 1.5em;
                padding: 1.5em;
            }
        }
    }
`;

const Input = styled(TextArea).attrs({
    as: "input"
})`
    border-bottom: 1px solid #70707026;
`;

const FormButton = styled(Button)`
    width: 50%;
    position: absolute;
    bottom: 1.2em;
    right: 1.2em;
`;


const ContactForm = () => {
    return (
        <Form>
            <Input placeholder={"NAME"}/>
            <Input placeholder={"EMAIL"}/>
            <TextArea placeholder={"MESSAGE"}/>
            <FormButton>Send message</FormButton>
        </Form>
    );
};

export default ContactForm;
