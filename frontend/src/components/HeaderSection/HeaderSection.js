import styled from "styled-components";
import PropTypes from "prop-types";

const HeaderSection = styled.h2`
    letter-spacing: 3px;
    font-size: 28px;
    font-weight: ${props => props.weight || 600};
    margin: 20px 0;
`;

HeaderSection.propTypes = {
    weight: PropTypes.number
};

export default HeaderSection;
