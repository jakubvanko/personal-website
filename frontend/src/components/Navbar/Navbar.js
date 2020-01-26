import React from "react";

import NavbarBox from "./components/NavbarBox";
import Signature from "./components/Signature";
import Hamburger from "./components/Hamburger";
import ButtonSVG from "../ButtonSVG/ButtonSVG";

const Navbar = () => (
    <NavbarBox>
        <ButtonSVG>
            <Signature/>
        </ButtonSVG>
        <ButtonSVG>
            <Hamburger/>
        </ButtonSVG>
    </NavbarBox>
);

export default Navbar;
