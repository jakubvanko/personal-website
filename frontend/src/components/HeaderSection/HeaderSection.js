import styled from "styled-components";

const HeaderSection = styled.h2`
    letter-spacing: 3px;
    font-size: 30px;
    font-weight: ${props => props.weight || 600};
`;

export default HeaderSection;
