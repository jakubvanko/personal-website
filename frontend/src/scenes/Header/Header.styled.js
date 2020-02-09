import styled from "styled-components";

export const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100vw;
    max-width: 100%;
    height: ${props => props.$mobileActive ? "250px" : "50px"};
    background-color: ${props => (props.$scrolled || props.$mobileActive) ? "white" : "transparent"};
    box-shadow: ${props => (props.$scrolled || props.$mobileActive) && "0 3px 6px #9a9a9a"};
    box-shadow: ${props => (props.$scrolled || props.$mobileActive) && "0 3px 6px #00000066"};
    // TODO: SET BG COLOR ON SCROLL TO WHITE AND ADD SHADOWS
    padding: 7px 40px 55px 40px;
    display: grid;
    grid-template-areas: "signature desktop hamburger" "mobile mobile mobile";
    grid-template-columns: auto auto auto;
    grid-template-rows: 50px 200px;
    justify-content: space-between;
    overflow-y: hidden;
    transition: box-shadow 0.4s, background-color 0.4s, height 0.3s;
    text-transform: uppercase;
    
    @media only screen and (min-width: 992px) {
        align-items: center;
        height: max(62px, 5vh);
    }
    
    @media only screen and (min-width: 2000px) {
        padding: 2vh 3vw 4vh 3vw;
    }
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    font-weight: bold;
    grid-column-gap: 5vw;
    grid-column-gap: max(100px, 5vw);
    font-size: max(16px, 0.8em);
    text-align: center;
    display: grid;
    grid-template-rows: auto auto auto;
    grid-area: mobile;
    user-select: none;
    
    @media only screen and (min-width: 992px) {
        grid-template-columns: auto auto auto;
        grid-area: desktop;
    }
    
    a {
        cursor: pointer;
    }
`;
