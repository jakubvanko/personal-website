import styled from "styled-components";

export const Container = styled.button`
    cursor: pointer;
    background-color: transparent;
    padding: 0;
    border: none;
    outline: none;
    grid-area: ${props => props.$area && props.$area};
    display: ${props => props.$display && props.$display};
    
    svg {
        display: block;
    }
`;
