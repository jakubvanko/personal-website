import styled from "styled-components";

import Icon from "../Icon/Icon";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 16px;
    
    @media only screen
    and (min-width: 992px) {
        @media (orientation: landscape) {
            justify-content: left;
        }
    }
`;

export const CenteredIconButton = styled(Icon)`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20px;
    margin: 0 auto;
    width: fit-content;
    display: flex;
    justify-content: center;
    
    @media only screen
    and (min-width: 992px) {
        @media (orientation: landscape) {
            display: none;
        }
    }
`;

export const TitleThin = styled.h1`
    letter-spacing: 3px;
    font-size: 28px;
    font-weight: 300;
    padding: 7px;
    
    @media only screen {
        @media (min-width: 992px) {
            @media (orientation: landscape) {
                font-size: 60px;
                letter-spacing: 7px;
                line-height: 80px;
            }
        }
        
        @media (min-width: 1300px) {
            @media (orientation: landscape) {
                font-size: 5em;
                letter-spacing: 7/16em;
                line-height: 110px;
            }
        }
        
        @media (min-width: 2700px) {
            @media (orientation: landscape) {
                font-size: 200px;
                letter-spacing: 17px;
                line-height: 330px;
            }
        }
        
        @media (min-width: 3100px) {
            @media (orientation: landscape) {
                font-size: 240px;
                letter-spacing: 21px;
                line-height: 330px;
            }
        }
    }
`;

export const TitleBold = styled(TitleThin)`
    font-weight: 600;
    align-self: flex-end;
`;

export const AdditionalText = styled.p`
    display: none;
    font-weight: 300;
    
    @media only screen {
        @media (min-width: 992px) {
            @media (orientation: landscape) {
                display: inline-block;
                padding: 30px 30px;
                font-size: 15px;
                letter-spacing: 2.5px;
            }
        }
        
        @media (min-width: 1300px) {
            @media (orientation: landscape) {
                padding: 30px 50px;
                font-size: 16px;
                letter-spacing: 2.5px;
            }
        }
        
        @media (min-width: 3100px) {
            @media (orientation: landscape) {
                padding: 90px 150px;
                font-size: 48px;
                letter-spacing: 7.5px;
            }
        }
    }
`;

export const TextContainer = styled.div`
    display: flex;
    
    @media only screen {
        @media (min-width: 992px) {
            @media (orientation: landscape) {
                flex-direction: column;
                padding-left: 11vw;
            }
        }
        
        @media (min-width: 3100px) {
            @media (orientation: landscape) {
                flex-direction: column;
                padding-left: 8.5vw;
            }
        }
    }
`;

export const PositionedBackground = styled.div`
    display: none;
    position: absolute;
    z-index: -1;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    
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
