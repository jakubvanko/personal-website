import styled from "styled-components";

const VerticalLine = styled.div`
    @media only screen and (min-width: 768px) {
      background-color: ${props => props.color};
      height: 100%;
      width: 40px;
      position: absolute;
      top: 0;
      left: 0;
    }
`;

export default VerticalLine;
