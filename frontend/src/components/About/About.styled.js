import styled from "styled-components";

export const Container = styled.div`
    padding: 0 30px;
    max-width: 100%;
    position: relative;
    font-size: 14px;
    
    @media only screen {
        @media (min-width: 400px) {
            font-size: 15px;
        }
    
        @media (min-width: 992px) {
            font-size: 1.16vw;
            padding: 50px 6.875vw 0 5vw;
            display: grid;
            grid-template-columns: auto auto auto;
            grid-template-areas: "heading text lists";
            align-items: center;
            grid-column-gap: 10vw;
            min-height: 100vh;
            
            @media (orientation: portrait) {
                grid-template-columns: auto auto;
                grid-template-areas: "heading text" "heading lists";
            }
        }
    }
`;

export const Text = styled.p`
    color: black;
    text-decoration: none;
    display: block;
    letter-spacing: 0.042em;
    line-height: 1.68em;
    
    @media only screen {
        @media (min-width: 992px) {
            text-align: center;
            
            @media (orientation: portrait) {
                font-size: 1.8em;
                align-self: flex-end;
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

export const SubHeading = styled.h2`
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 20px;
    padding: 40px 0 20px 10px;
    
    @media only screen {
        @media (min-width: 992px) {
            font-size: 1.445em;
            
            @media (orientation: portrait) {
                font-size: 2.3em;
            }
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
