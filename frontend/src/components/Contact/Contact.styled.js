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
                grid-template-columns: min-content auto;
                grid-template-rows: auto auto;
                grid-template-areas: "heading contacts" "heading form";
                grid-row-gap: 4vh;
            }
        }
    }
`;

export const AllContactsContainer = styled.div`
    @media only screen {
        @media (min-width: 992px) {
            @media (orientation: portrait) {
                justify-self: center;
                align-self: flex-end;
            }
        }
    }
`;

export const ContactContainer = styled(Text).attrs({
    as: "a"
})`
    display: grid;
    grid-template-columns: min-content auto;
    align-items: center;
    padding-left: 5px;
    grid-column-gap: max(20px, 1.5vw);
    
    font-size: 1.09em;
    line-height: 3.1em;
    
    @media only screen {
        @media (min-width: 992px) {
            text-align: left;
            
            @media (orientation: portrait) {
                justify-content: center;
            }
        }
        
        @media (min-width: 1921px) {
            grid-column-gap: 2vw;
        }
        
        @media (min-width: 2400px) {
            font-size: 1.22em;
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
            
            @media (orientation: portrait) {
                align-self: flex-start;
            }
        }
    }
`;

export const SubHeading = styled(HeadingSub)`
    @media only screen {
        @media (min-width: 992px) {
            padding-left: 0;
            text-transform: uppercase;
            
            @media (orientation: portrait) {
                padding-bottom: 2vh;
            }
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
        @media (min-width: 992px) {
            @media (orientation: portrait) {
                height: 35vh;
                max-width: 45vw;
            }
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
    
    @media only screen {
        @media (min-width: 992px) {            
            @media (orientation: portrait) {
                font-size: 1.5em;
                padding: 1.5em;
            }
        }
    }
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
