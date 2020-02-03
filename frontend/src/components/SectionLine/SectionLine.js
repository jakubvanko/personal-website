import styled from "styled-components";

const SectionLine = styled.div`
    @media (min-width: 992px) {
        height: 100%;
        background-color: ${props => props.$color};
        width: 1.875vw;
        position: absolute;
        top: 0;
        left: 0;
        box-shadow: 3px 0 5px rgba(0,0,0,0.3);
    }
`;

export default SectionLine;
