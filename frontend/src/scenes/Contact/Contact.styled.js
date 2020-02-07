import styled from "styled-components";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import HeadingSub from "../../components/HeadingSub/HeadingSub";

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
    grid-column-gap: max(15px, 1.5vw);
    
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
