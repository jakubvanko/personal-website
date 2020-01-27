import styled from "styled-components";

const ProjectBoxInner = styled.div`
    display: grid;
    grid-template-areas: "text text" "live code";
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    padding-bottom: 20px;
`;

export default ProjectBoxInner;
