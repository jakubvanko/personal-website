import styled from "styled-components";

export const Container = styled.div`
    height: 300vh;
    position: relative;
    padding: 0 30px;
    max-width: 100vw;
    font-size: 14px;
    
    @media only screen {
        @media (min-width: 400px) {
            font-size: 15px;
        }
    
        @media (min-width: 992px) {
            font-size: 1.16vw;
        }
    
        @media (min-width: 992px) {
            padding: 50px 6.875vw 0 5vw;
            min-height: 100vh;
        }
    }
`;

export const StickyHeadingContainer = styled.div`
    @media only screen {
        @media (min-width: 992px) {
            position: sticky;
            top: 40px;
            height: 100vh;
            display: flex;
            align-items: center;
        }
    }
`;
