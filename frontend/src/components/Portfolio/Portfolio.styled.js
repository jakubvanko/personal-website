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
        }
    }
`;

export const AllProjectsContainer = styled.div`

`;

export const ProjectContainer = styled.div`
    @media only screen {   
        @media (min-width: 992px) {
            height: 100vh;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            grid-template-areas: "heading rest";
            align-items: center;
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
        font-size: 4.5vh;
        text-transform: uppercase;
        text-align: center;
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
        }
    }
`;

export const Button = styled.button`
    box-shadow: 0 3px 6px #00000066;
    border: none;
    background-color: white;
    width: 100%;
    height: 50px;
    font-size: 1em;
    font-weight: normal;
    grid-area: ${props => props.$gridArea && props.$gridArea};
    cursor: pointer;
`;
