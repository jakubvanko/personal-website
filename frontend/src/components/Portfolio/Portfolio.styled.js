import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    padding: 0 30px;
    max-width: 100%;
    font-size: 14px;
    
    @media only screen {
        @media (min-width: 400px) {
            font-size: 15px;
        }
    
        @media (min-width: 992px) {
            font-size: 1.16vw;
            padding: 0 6.875vw 0 5vw;
            min-height: 100vh;
            display: flex;
        }
    }
`;

export const StickyHeadingContainer = styled.div`
    @media only screen {
        @media (min-width: 992px) {
            padding-top: 50px;
            position: sticky;
            top: 0;
            height: 100vh;
            display: flex;
            align-items: center;
        }
    }
`;

export const ProjectContainer = styled.div`
    @media only screen {
        @media (min-width: 992px) {
            height: 100vh;
        }
    }
`;
