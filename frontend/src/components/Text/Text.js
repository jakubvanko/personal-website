import styled from "styled-components";

const Text = styled.p`
    color: black;
    text-decoration: none;
    display: block;
    letter-spacing: 0.042em;
    line-height: 1.68em;
    grid-area: ${props => props.$gridArea && props.$gridArea};
    
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

export default Text;
