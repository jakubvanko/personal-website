import styled from "styled-components";

import Icon from "../Icon/Icon";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    @media only screen and (min-width: 768px) {
        justify-content: left;
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
    
    @media only screen and (min-width: 768px) {
        display: none;
    }
`;

export const TitleThin = styled.h1`
    letter-spacing: 3px;
    font-size: 28px;
    font-weight: 300;
    padding: 7px;
    
    @media only screen and (min-width: 768px) {
        font-size: 80px;
        letter-spacing: 7px;
        line-height: 110px;
    }
`;

export const TitleBold = styled(TitleThin)`
    font-weight: 600;
    
    @media only screen and (min-width: 768px) {
        align-self: flex-end;
    }
`;

export const AdditionalText = styled.p`
    display: none;
    font-weight: 300;
    padding: 30px 50px;
    font-size: 16px;
    letter-spacing: 2.5px;

    @media only screen and (min-width: 768px) {
        display: inline-block;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    
    @media only screen and (min-width: 768px) {
        flex-direction: column;
        padding-left: 11vw;
    }
`;

export const PositionedBackground = styled.div`
    position: absolute;
    z-index: -1;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    
    svg {
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
    }
`;
