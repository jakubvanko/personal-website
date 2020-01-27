import React from "react";

import ButtonSVG from "../ButtonSVG/ButtonSVG";
import Arrow from "./components/Arrow";
import ButtonArrowBox from "./components/ButtonArrowBox";

const ButtonArrow = () => (
    <ButtonArrowBox>
        <ButtonSVG>
            <Arrow/>
        </ButtonSVG>
    </ButtonArrowBox>
);

export default ButtonArrow;
