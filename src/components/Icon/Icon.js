import React from "react";

import {Container} from "./Icon.styled";
import Arrow from "./components/Arrow";
import Email from "./components/Email";
import Github from "./components/Github";
import Hamburger from "./components/Hamburger";
import Linkedin from "./components/Linkedin";
import Signature from "./components/Signature";

const ICON_MAP = {
    arrow: Arrow,
    github: Github,
    email: Email,
    hamburger: Hamburger,
    linkedin: Linkedin,
    signature: Signature
};

const Icon = ({name, width, ...props}) => {
    const IconComponent = ICON_MAP[name];
    return (
        <Container {...props}>
            <IconComponent width={width}/>
        </Container>
    )
};

export default Icon;
