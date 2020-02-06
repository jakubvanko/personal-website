import styled from "styled-components";
import Text from "../Text/Text";
import SectionContainer from "../SectionContainer/SectionContainer";

export const Container = styled(SectionContainer)`    
    @media only screen {
        @media (min-width: 992px) {
            display: grid;
            grid-template-columns: auto auto auto;
            grid-template-areas: "heading text lists";
            align-items: center;
            grid-column-gap: 10vw;
            
            @media (orientation: portrait) {
                grid-template-columns: auto auto;
                grid-template-areas: "heading text" "heading lists";
            }
        }
    }
`;

export const ListText = styled(Text)`
    @media only screen {
        @media (min-width: 992px) {
            text-align: left;
        }
    }
`;

export const ListContainer = styled.div`
    @media only screen {
        @media (min-width: 992px) {
            padding: 0 3vw;
            height: 75%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            
            @media (orientation: portrait) {
                justify-self: center;
                justify-content: space-evenly;
                align-self: flex-start;
                padding-top: 4vh;
                padding-bottom: 4vh;
            }
        }
    }
`;
