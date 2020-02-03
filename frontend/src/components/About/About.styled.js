import styled from "styled-components";

export const Container = styled.div`
    padding: 0 30px;
    max-width: 100vw;
    position: relative;
    
    @media only screen
    and (min-width: 992px) {
        padding: 0 110px 0 80px;
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-areas: "heading text lists";
        align-items: center;
        grid-column-gap: 10vw;
    
        :before {
            height: 100%;
            background-color: #525F95;
            width: 30px;
            position: absolute;
            top: 0;
            left: 0;
            content: "";
            box-shadow: 3px 0 5px rgba(0,0,0,0.3);
        }
        
        @media (orientation: landscape) {
            min-height: 100vh;
        }
    }
`;

export const Heading = styled.h2`
    letter-spacing: 3px;
    font-size: 26px;
    padding: 80px 0 20px 0;
    font-weight: 600;
    grid-area: heading;
    
    @media only screen
    and (min-width: 992px) {
        padding: 30px 30px 0 30px;
        writing-mode: vertical-lr;
        text-orientation: upright;
        text-align: center;
        font-size: 40px;
        text-transform: uppercase;
        letter-spacing: 12px;
        font-weight: 700;
    }
`;

export const Text = styled.p`
    color: black;
    text-decoration: none;
    display: block;
    font-size: 14px;
    letter-spacing: 0.75px;
    line-height: 30px;
    
    @media only screen
    and (min-width: 992px) {
        text-align: center;
        font-size: 16px;
    }
`;

export const SubHeading = styled.h2`
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 20px;
    padding: 40px 0 20px 10px;
    
    @media only screen
    and (min-width: 992px) {
        font-size: 26px;
    }
`;

export const ListContainer = styled.div`
    @media only screen
    and (min-width: 992px) {
        padding: 0 30px;
        height: 75%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
`;
