import styled from "styled-components";
import PropTypes from "prop-types";

const HeaderAdditional = styled.h2`
    letter-spacing: 2px;
    font-size: 20px;
    font-weight: ${props => props.weight || 600};
    margin: 40px 10px 25px 10px;
`;

HeaderAdditional.propTypes = {
    weight: PropTypes.number
};

export default HeaderAdditional;
