import styled from "styled-components";

const SectionContainer = styled.div`
    padding: 0 30px;
    max-width: 100%;
    position: relative;
    
    @media only screen {
        @media (min-width: 992px) {
            padding: 50px 6.875vw 0 5vw;
            min-height: 100vh;
        }
    }
`;

export default SectionContainer;
