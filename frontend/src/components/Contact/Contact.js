import React from "react";

import {Container} from "./Contact.styled";
import SectionLine from "../SectionLine/SectionLine";
import Heading from "../Heading/Heading";

const Contact = () => (
    <Container id={"contact"}>
        <SectionLine $color={"#2F4961"} />
        <Heading>Contact</Heading>
    </Container>
);

export default Contact;
