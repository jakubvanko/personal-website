import React, {useState, useEffect} from "react";
import {Link, ScrollLink} from "react-scroll";

import useWindowDimensions from "../../scripts/hooks/useWindowDimensions";

import {Container, List} from "./Header.styled";
import Icon from "../../components/Icon/Icon";

const ScrollIcon = ScrollLink(Icon);

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

    const handleLinkClick = () => {
        setScrolled(true);
        setMobileActive(false);
    };

    const signatureWidth = Math.max(46.343, width / 100 * 2.5);

    return (
        <Container $mobileActive={isMobileActive} $scrolled={isScrolled}>
            <ScrollIcon to={"home"} smooth={true} name={"signature"} $gridArea={"signature"} width={signatureWidth}
                        aria-label={"home"}/>
            <List>
                <li><Link to={"about"} smooth={true} onClick={handleLinkClick}>ABOUT</Link></li>
                <li><Link to={"portfolio"} smooth={true} onClick={handleLinkClick}>PORTFOLIO</Link></li>
                <li><Link to={"contact"} smooth={true} onClick={handleLinkClick}>CONTACT</Link></li>
            </List>
            <Icon name={"hamburger"} $gridArea={"hamburger"} $display={width >= 992 && "none"}
                  onClick={handleButtonClick} aria-label={"open navigation"}/>
        </Container>
    )
};

export default Header;
