import React from "react";

import HeaderTitleBox from "./components/HeaderTitleBox";
import HeaderSection from "../HeaderSection/HeaderSection";
import HeaderWrapper from "./components/HeaderWrapper";

const HeaderTitle = () => (
    <HeaderTitleBox>
        <HeaderWrapper>
            <HeaderSection weight={300}>
                Jakub
            </HeaderSection>
            <HeaderSection>
                Vanko
            </HeaderSection>
        </HeaderWrapper>
    </HeaderTitleBox>
);

export default HeaderTitle;
