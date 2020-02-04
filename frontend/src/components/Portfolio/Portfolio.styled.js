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

export const ProjectContainer = styled.div`
    display: grid;
    grid-template-areas: "heading heading" "text text" "live code";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    padding-bottom: 36px;

    @media only screen {
        @media (min-width: 992px) {
            height: 100vh;
            display: flex;
            align-items: center;
        }
    }
`;

export const ProjectHeading = styled.h2`
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 20px;
    padding: 20px 0 5px 10px;
    color: #707070;
    grid-area: heading;
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
