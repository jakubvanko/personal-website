import React from "react";

import TextGroup from "../TextGroup/TextGroup";
import Email from "./components/Email";
import TextBig from "../TextBig/TextBig";
import ContactPiece from "./components/ContactPiece";
import Linkedin from "./components/Linkedin";
import Github from "./components/Github";

const ContactGroup = () => (
    <TextGroup>
        <ContactPiece>
            <Email/>
            <TextBig>
                kubko.vanko@gmail.com
            </TextBig>
        </ContactPiece>
        <ContactPiece>
            <Linkedin/>
            <TextBig>
                linkedin.com/in/jakubvanko
            </TextBig>
        </ContactPiece>
        <ContactPiece>
            <Github/>
            <TextBig>
                github.com/jakubvanko
            </TextBig>
        </ContactPiece>
    </TextGroup>
);

export default ContactGroup;
