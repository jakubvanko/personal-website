import styled from "styled-components";

const TextBig = styled.p`
    font-size: 16px;
    letter-spacing: 0.85px;
    line-height: 45px;
    ${props => props.justify && "text-align: justify;"}
`;

export default TextBig;
