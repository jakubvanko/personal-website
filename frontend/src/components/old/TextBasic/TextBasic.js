import styled from "styled-components";

const TextBasic = styled.p`
    font-size: 14px;
    letter-spacing: 0.75px;
    line-height: 30px;
    ${props => props.justify && "text-align: justify;"}
`;

export default TextBasic;
