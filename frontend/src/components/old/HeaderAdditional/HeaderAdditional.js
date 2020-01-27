import styled from "styled-components";
import PropTypes from "prop-types";

const HeaderAdditional = styled.h2`
    letter-spacing: 2px;
    font-size: 20px;
    font-weight: ${props => props.weight || 600};
    padding: 40px 0 0 10px;
`;

HeaderAdditional.propTypes = {
    weight: PropTypes.number
};

export default HeaderAdditional;
