import styled from "styled-components";

export const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100vw;
    height: ${props => props.$mobileActive ? "250px" : "50px"};
    background-color: transparent;
    // TODO: SET BG COLOR ON SCROLL TO WHITE AND ADD SHADOWS
    padding: 10px 40px;
    display: grid;
    grid-template-areas: "signature desktop hamburger" "mobile mobile mobile";
    grid-template-columns: auto auto auto;
    grid-template-rows: 50px 200px;
    justify-content: space-between;
    overflow-y: hidden;
    transition: height 0.3s;
    text-transform: uppercase;
    
    @media only screen and (min-width: 992px) {
        align-items: center;
    }
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    font-weight: bold;
    grid-column-gap: 100px;
    font-size: 16px;
    text-align: center;
    display: grid;
    grid-template-rows: auto auto auto;
    grid-area: mobile;
    
    @media only screen and (min-width: 992px) {
        grid-template-columns: auto auto auto;
        grid-area: desktop;
    }
`;

export const Anchor = styled.a`
    color: black;
    text-decoration: none;
`;
