import React from "react";
import PropTypes from "prop-types";

import SectionBox from "./components/SectionBox";
import HeaderSection from "../HeaderSection/HeaderSection";

const Section = ({header, children}) => (
    <SectionBox>
        {header && <HeaderSection>{header}</HeaderSection>}
        {children}
    </SectionBox>
);

Section.propTypes = {
    header: PropTypes.string
};

export default Section;
