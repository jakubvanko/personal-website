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
    height: 100vw;
    position: relative;
`;

export const Input = styled.input`
    font-size: 16px;
    color: #707070;
    border: none;
    outline: none;
    padding: 16px;
    width: 100%;
    border-bottom: 1px solid #70707026;
`;

export const TextArea = styled.textarea`
    font-size: 16px;
    color: #707070;
    border: none;
    outline: none;
    padding: 15px;
    width: 100%;
`;

export const FormButton = styled(Button)`
    width: 40vw;
    position: absolute;
    bottom: 15px;
    right: 15px;
`;
