import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios";

import Button from "../../../components/Button/Button";

const Form = styled.form`
    box-shadow: 0 3px 6px #939393;
    box-shadow: 0 3px 6px #00000066;
    width: 100%;
    min-height: 50vh;
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
    font-size: 1em;
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
    border-bottom: 1px solid #dadada;
    border-bottom: 1px solid #70707026;
`;

const FormButton = styled(Button)`
    width: 50%;
    position: absolute;
    bottom: 1.2em;
    right: 1.2em;
`;

const sendMail = async (name, email, text) => {
    if (text.length < 5) return false;
    const data = {
        name,
        email,
        text
    };
    const result = await axios.post("https://jakubvanko.com/api", {}, { params: data});
    return result.status === 200;
};

const RESPONSE_SUCCESS = "Thank you for contacting me.\n\nI will get to you as soon as possible.\n\n~ Jakub Vanko";
const RESPONSE_FAILURE = "There was an error.\n\nPlease contact me directly.\n\n~ Jakub Vanko";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        sendMail(name, email, text).then(result => {
            setName("");
            setEmail("");
            const responseText = result ? RESPONSE_SUCCESS : RESPONSE_FAILURE;
            setText(responseText);
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input placeholder={"NAME"} value={name} onChange={e => setName(e.target.value)} aria-label={"name"}/>
            <Input placeholder={"EMAIL"} value={email} onChange={e => setEmail(e.target.value)} aria-label={"email"}/>
            <TextArea placeholder={"MESSAGE"} value={text} onChange={e => setText(e.target.value)}
                      aria-label={"message"}/>
            <FormButton aria-label={"submit"}>Send message</FormButton>
        </Form>
    );
};

export default ContactForm;
