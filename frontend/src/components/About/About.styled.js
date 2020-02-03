import styled from "styled-components";

export const Container = styled.div`
    padding: 0 30px;
    max-width: 100vw;
    position: relative;
    font-size: 14px;
    
    @media only screen {
        @media (min-width: 400px) {
            font-size: 15px;
        }
    
        @media (min-width: 992px) {
            font-size: 1.16vw;
        }
    
        @media (min-width: 992px) {
            padding: 50px 6.875vw 0 5vw;
            display: grid;
            grid-template-columns: auto auto auto;
            grid-template-areas: "heading text lists";
            align-items: center;
            grid-column-gap: 10vw;
        
            :before {
                height: 100%;
                background-color: #525F95;
                width: 1.875vw;
                position: absolute;
                top: 0;
                left: 0;
                content: "";
                box-shadow: 3px 0 5px rgba(0,0,0,0.3);
            }
            min-height: 100vh;
            
            @media (orientation: portrait) {
                grid-template-columns: auto auto;
                grid-template-areas: "heading text" "heading lists";
            }
        }
    }
`;

export const Heading = styled.h2`
    letter-spacing: 3px;
    font-size: 26px;
    padding: 80px 0 20px 0;
    font-weight: 600;
    grid-area: heading;
    
    @media only screen {
        @media (min-width: 992px) {
            padding: 0 2.5vw;
            writing-mode: vertical-lr;
            text-orientation: upright;
            text-align: center;
            font-size: 5.05vh;
            text-transform: uppercase;
            letter-spacing: 0.3em;
            font-weight: 700;
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
            padding: 0 2.5vw;
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
