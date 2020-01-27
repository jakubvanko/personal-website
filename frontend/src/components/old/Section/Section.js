import React from "react";
import PropTypes from "prop-types";

import SectionBox from "./components/SectionBox";
import HeaderSection from "../HeaderSection/HeaderSection";
import VerticalLine from "../VerticalLine/VerticalLine";

const Section = ({header, children, color}) => (
    <SectionBox>
        {color && <VerticalLine color={color}/>}
        {header && <HeaderSection>{header}</HeaderSection>}
        {children}
    </SectionBox>
);

Section.propTypes = {
    header: PropTypes.string
};

export default Section;
