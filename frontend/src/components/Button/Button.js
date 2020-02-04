import styled from "styled-components";

const Button = styled.button`
    box-shadow: 0 3px 6px #00000066;
    border: none;
    background-color: white;
    width: 100%;
    height: 50px;
    font-size: 1em;
    font-weight: normal;
    grid-area: ${props => props.$gridArea && props.$gridArea};
    cursor: pointer;
`;

export default Button;
