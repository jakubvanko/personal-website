import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    padding: 0 30px;
    max-width: 100%;
    
    @media only screen {    
        @media (min-width: 992px) {
            padding: 0 6.875vw 0 5vw;
            min-height: 100vh;
            display: flex;
        }
    }
`;

export const StickyHeadingContainer = styled.div`
    @media only screen {
        @media (min-width: 992px) {
            padding-top: 50px;
            position: sticky;
            top: 0;
            height: 100vh;
            display: flex;
            align-items: center;
            // If something breaks try removing the next line
            width: fit-content;
        }
    }
`;

export const ProjectContainer = styled.div`
    @media only screen {   
        @media (min-width: 992px) {
            height: 100vh;
            display: grid;
            grid-template-columns: 3fr 2fr;
            grid-template-rows: auto;
            grid-template-areas: "heading rest";
            align-items: center;
            
            @media (orientation: portrait) {
                grid-template-areas: "heading" "rest";
                grid-template-rows: auto auto;
                grid-template-columns: auto;
                padding: 5vh 5vw;
            }
        }
    }
`;

export const ProjectHeading = styled.h2`
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 20px;
    padding: 20px 0 20px 0;
    color: #707070;
    grid-area: heading;
    
    @media (min-width: 992px) {
        font-size: 4.3vh;
        text-transform: uppercase;
        text-align: center;
        letter-spacing: 11px;
    }
`;

export const ProjectDataContainer = styled.div`
    display: grid;
    grid-template-areas: "text text" "live code";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    padding-bottom: 36px;
    
    @media only screen {   
        @media (min-width: 992px) {
            grid-template-areas: "live" "text" "code";
            grid-template-rows: min-content min-content min-content;
            grid-template-columns: auto;
            grid-row-gap: 5vh;
            padding: 0 3vw;
            
            @media (orientation: portrait) {
                align-self: flex-start;
            }
        }
    }
`;
