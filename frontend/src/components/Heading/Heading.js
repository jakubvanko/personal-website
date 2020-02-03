import styled from "styled-components";

const Heading = styled.h2`
    letter-spacing: 3px;
    font-size: 26px;
    padding: 80px 0 20px 0;
    font-weight: 600;
    grid-area: heading;
    
    @media only screen {
        @media (min-width: 992px) {
            padding: 0 2.5vw;
            writing-mode: vertical-lr;
            text-orientation: upright;
            text-align: center;
            font-size: 5.05vh;
            text-transform: uppercase;
            letter-spacing: 0.3em;
            font-weight: 700;
        }
    }
`;

export default Heading;
