import React from "react";

import Background from "./Background";
import FallingStars from "./FallingStars";

import bg_bottom from "../assets/bg_bottom.jpg";
import bg_top from "../assets/bg_top.png";
import styled from "styled-components";

export const PositionedBackground = styled.div`
    display: none;
    position: absolute;
    z-index: -1;
    height: 100vh;
    width: 100vw;
    max-width: 100%;
    
    svg {
        position: absolute;
        height: 100vh;
        top: 0;
        right: -40vw;
        z-index: -1;
    }
    
    @media only screen {
        @media (orientation: landscape) and (min-width: 992px) {
            display: block;
        }
        
        @media (min-aspect-ratio: 21/20) {
            svg {
                right: -30vw;
            }
        }
        
        @media (min-aspect-ratio: 11/10) {
            svg {
                right: -27vw;
            }
        }
        
        @media (min-aspect-ratio: 12/10) {
            svg {
                right: -23vw;
            }
        }
        
        @media (min-aspect-ratio: 13/10) {
            svg {
                right: -18vw;
            }
        }
        
        @media (min-aspect-ratio: 14/10) {
            svg {
                right: -14vw;
            }
        }
        
        @media (min-aspect-ratio: 15/10) {
            svg {
                right: -9vw;
            }
        }
        
        @media (min-aspect-ratio: 16/10) {
            svg {
                right: -5vw;
            }
        }
        
        @media (min-aspect-ratio: 17/10) {
            svg {
                right: 0;
            }
        }
    }
`;

const AnimatedBackground = () => (
    <PositionedBackground>
        <Background background={bg_bottom}/>
        <FallingStars/>
        <Background background={bg_top}/>
    </PositionedBackground>
);

export default AnimatedBackground;
