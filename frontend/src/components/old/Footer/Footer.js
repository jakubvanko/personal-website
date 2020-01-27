import React from "react";

import FooterBoxInner from "./components/FooterBoxInner";
import FooterText from "./components/FooterText";
import FooterBox from "./components/FooterBox";
import VerticalLine from "../VerticalLine/VerticalLine";

const Footer = () => (
    <FooterBox>
        <VerticalLine color={"#2F4961"}/>
        <FooterText>
            Download my resumé
        </FooterText>
        <FooterBoxInner>
            <FooterText>
                © 2020 Jakub Vanko
            </FooterText>
        </FooterBoxInner>
    </FooterBox>
);

export default Footer;
