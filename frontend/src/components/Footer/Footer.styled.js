import styled from "styled-components";
import Text from "../Text/Text";

export const Container = styled.div`
    max-width: 100%;
    position: relative;
    padding-top: 7vh;
`;

export const FooterText = styled(Text)`
    color: #707070;
    text-align: center;
    font-weight: 400;
    font-size: 0.9em;
`;

export const CopyrightContainer = styled.div`
    border-top: 1px solid #7070704D;
    padding: 1.5vh 0 2vh 0;
    margin-top: 1.5vh;
`;
