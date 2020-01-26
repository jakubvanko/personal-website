import React from "react";

import FooterBoxInner from "./components/FooterBoxInner";
import FooterText from "./components/FooterText";
import FooterBox from "./components/FooterBox";

const Footer = () => (
    <FooterBox>
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
