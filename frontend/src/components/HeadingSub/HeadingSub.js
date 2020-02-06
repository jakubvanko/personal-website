import styled from "styled-components";

const HeadingSub = styled.h2`
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 20px;
    padding: 40px 0 20px 10px;
    
    @media only screen {
        @media (min-width: 992px) {
            font-size: 1.445em;
            
            @media (orientation: portrait) {
                font-size: 2.3em;
            }
        }
    }
`;

export default HeadingSub;
