import React, {useState} from "react";

import useWindowDimensions from "../../scripts/hooks/useWindowDimensions";

import {Container, List, Anchor} from "./Header.styled";
import Icon from "../Icon/Icon";

const Header = () => {
    const [isMobileActive, setMobileActive] = useState(false);
    const [width] = useWindowDimensions();

    const handleClick = () => {
        setMobileActive(!isMobileActive);
    };

    return (
        <Container $mobileActive={isMobileActive}>
            <Icon name={"signature"} $area={"signature"}/>
            <List>
                <li><Anchor href={"#about"}>ABOUT</Anchor></li>
                <li><Anchor href={"#portfolio"}>PORTFOLIO</Anchor></li>
                <li><Anchor href={"#contact"}>CONTACT</Anchor></li>
            </List>
            <Icon name={"hamburger"} $area={"hamburger"} $display={width >= 768 && "none"}
                  onClick={() => handleClick()}/>
        </Container>
    )
};

export default Header;
