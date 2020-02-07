import React, {useState, useEffect} from "react";

import useWindowDimensions from "../../scripts/hooks/useWindowDimensions";

import {Container, List, Anchor} from "./Header.styled";
import Icon from "../../components/Icon/Icon";

const Header = () => {
    const [isMobileActive, setMobileActive] = useState(false);
    const [width] = useWindowDimensions();
    const [isScrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleButtonClick = () => {
        setMobileActive(!isMobileActive);
    };

    const handleLinkClick=  () => {
        setScrolled(true);
        setMobileActive(false);
    };

    return (
        <Container $mobileActive={isMobileActive} $scrolled={isScrolled}>
            <Icon name={"signature"} $gridArea={"signature"} as={"a"} href={"#home"}/>
            <List>
                <li><Anchor href={"#about"} onClick={() => handleLinkClick()}>ABOUT</Anchor></li>
                <li><Anchor href={"#portfolio"} onClick={() => handleLinkClick()}>PORTFOLIO</Anchor></li>
                <li><Anchor href={"#contact"} onClick={() => handleLinkClick()}>CONTACT</Anchor></li>
            </List>
            <Icon name={"hamburger"} $gridArea={"hamburger"} $display={width >= 992 && "none"}
                  onClick={() => handleButtonClick()}/>
        </Container>
    )
};

export default Header;
