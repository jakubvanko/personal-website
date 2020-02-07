import styled from "styled-components";

const Button = styled.button`
    box-shadow: 0 3px 6px #00000066;
    border: none;
    background-color: white;
    width: 100%;
    min-height: 50px;
    height: 6.33vh;
    font-size: 1em;
    font-weight: normal;
    grid-area: ${props => props.$gridArea && props.$gridArea};
    cursor: pointer;
    
    @media only screen {
        @media (min-width: 992px) {            
            @media (orientation: portrait) {
                font-size: 1.5em;
            }
        }
    }
`;

export default Button;
