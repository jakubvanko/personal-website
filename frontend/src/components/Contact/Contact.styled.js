import styled from "styled-components";
import SectionContainer from "../SectionContainer/SectionContainer";
import Text from "../Text/Text";
import Button from "../Button/Button";

export const Container = styled(SectionContainer)`
`;

export const AllContactsContainer = styled.div`

`;

export const ContactContainer = styled(Text).attrs({
    as: "a"
})`
    display: grid;
    grid-template-columns: min-content auto;
    align-items: center;
    padding-left: 5px;
    grid-column-gap: 20px;
    
    font-size: 1.09em;
    line-height: 3.1em;
`;

export const ContactForm = styled.form`
    box-shadow: 0 3px 6px #00000066;
    width: 100%;
    height: 50vh;
    position: relative;
    // Not sure about the margin here
    margin: 1vh 0;
`;

export const TextArea = styled.textarea`
    font-size: 1.15em;
    color: #707070;
    border: none;
    outline: none;
    padding: 1.1em;
    width: 100%;
`;

export const Input = styled(TextArea).attrs({
    as: "input"
})`
    border-bottom: 1px solid #70707026;
`;

export const FormButton = styled(Button)`
    width: 50%;
    position: absolute;
    bottom: 1.2em;
    right: 1.2em;
`;
