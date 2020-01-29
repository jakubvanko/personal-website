import React, {useState} from "react";

import useWindowDimensions from "../../scripts/hooks/useWindowDimensions";
import {HEADER_LINKS} from "../../scripts/constants/textData";

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
            <Icon name={"signature"} $gridArea={"signature"}/>
            <List>
                {HEADER_LINKS.map(({text, link}) => <li><Anchor href={link}>{text}</Anchor></li>)}
            </List>
            <Icon name={"hamburger"} $gridArea={"hamburger"} $display={width >= 768 && "none"}
                  onClick={() => handleClick()}/>
        </Container>
    )
};

export default Header;
