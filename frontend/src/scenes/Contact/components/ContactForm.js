import React, {useState} from "react";
import styled from "styled-components";

import Button from "../../../components/Button/Button";

const Form = styled.form`
    box-shadow: 0 3px 6px #00000066;
    width: 100%;
    min-height: max(50vh, 20em, 320px);
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
    color: black;
    border: none;
    outline: none;
    padding: 1em;
    width: 100%;
    
    ::placeholder {
        color: #707070;
    }
    
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
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        // TODO: API CALL TO HANDLE SUBMIT
        setName("");
        setEmail("");
        setText("Thank you for contacting me.\n\nI will get to you as soon as possible.\n\n~ Jakub Vanko");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input placeholder={"NAME"} value={name} onChange={e => setName(e.target.value)}/>
            <Input placeholder={"EMAIL"} value={email} onChange={e => setEmail(e.target.value)}/>
            <TextArea placeholder={"MESSAGE"} value={text} onChange={e => setText(e.target.value)}/>
            <FormButton>Send message</FormButton>
        </Form>
    );
};

export default ContactForm;
