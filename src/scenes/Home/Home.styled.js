import styled from "styled-components";
import Div100vh from 'react-div-100vh';

import Icon from "../../components/Icon/Icon";

export const Container = styled(Div100vh)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 16px;
    overflow-x: hidden;
    
    @media only screen {
        @media (min-width: 992px) {
            @media (orientation: landscape) {
                justify-content: left;
            }
        }
        
        @media (min-width: 1300px) {
            font-size: 21.3px;
        }
        
        @media (min-width: 1700px) {
            font-size: 28px;
        }
        
        @media (min-width: 2000px) {
            font-size: 32px;
        }
        
        @media (min-width: 2300px) {
            font-size: 38px;
        }
        
        @media (min-width: 2600px) {
            font-size: 46px;
        }
        
        @media (min-width: 2800px) {
            font-size: 54px;
        }
        
        @media (min-width: 3100px) {
            font-size: 1.331vw;
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
    font-size: 23px;
    font-weight: 300;
    padding: 7px;
    
    @media only screen {
        @media (min-width: 350px) {
            font-size: 26px;
        }
    
        @media (min-width: 992px) {
            font-size: 3.75em;
            letter-spacing: 7px;
            line-height: 80px;
        }
        
        @media (min-width: 1300px) {
            @media (orientation: landscape) {
                letter-spacing: 0.0875em;
                line-height: 1.38em;
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
                padding: 1.86em 2.15em;
                font-size: 0.75em;
                letter-spacing: 0.157em;
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
        
        @media (min-width: 2600px) {
            @media (orientation: landscape) {
                padding-left: 8.5vw;
            }
        }
    }
`;
