import styled from "styled-components";
import SectionContainer from "../SectionContainer/SectionContainer";
import Text from "../Text/Text";

export const Container = styled(SectionContainer)`
`;

export const AllContactsContainer = styled.div`

`;

export const ContactContainer = styled(Text).attrs({
    as: "a"
})`
    display: grid;
    grid-template-columns: min-content auto;
    align-items: center;
    padding-left: 5px;
    grid-column-gap: 20px;
    
    font-size: 1.09em;
    line-height: 3.1em;
`;
