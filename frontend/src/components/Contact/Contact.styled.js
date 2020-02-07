import styled from "styled-components";
import SectionContainer from "../SectionContainer/SectionContainer";
import Text from "../Text/Text";
import Button from "../Button/Button";
import HeadingSub from "../HeadingSub/HeadingSub";

export const Container = styled(SectionContainer)`
    @media only screen {
        @media (min-width: 992px) {
            display: grid;
            grid-template-columns: auto auto auto;
            grid-template-areas: "heading contacts form";
            align-items: center;
            grid-column-gap: 7vw;
            
            @media (orientation: portrait) {
            }
        }
    }
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
    
    @media only screen {
        @media (min-width: 992px) {
            text-align: left !important;
            
        }
    }
`;

export const FormContainer = styled.div`
    @media only screen {
        @media (min-width: 992px) {
            padding: 0 3vw;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`;

export const SubHeading = styled(HeadingSub)`
    @media only screen {
        @media (min-width: 992px) {
            padding-left: 0;
            text-transform: uppercase;
        }
    }
`;

export const ContactForm = styled.form`
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
    }
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
