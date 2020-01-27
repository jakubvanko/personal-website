import React from "react";

import HeaderProject from "../HeaderProject/HeaderProject";
import Button from "../Button/Button";
import ProjectBoxInner from "./components/ProjectBoxInner";
import ProjectBoxText from "./components/ProjectBoxText";
import TextGroup from "../TextGroup/TextGroup";

const Project = ({header, live, code, children}) => (
    <section>
        <HeaderProject>
            {header}
        </HeaderProject>
        <ProjectBoxInner>
            <ProjectBoxText>
                    {children}
            </ProjectBoxText>
            <TextGroup>
                <Button>
                    Live version
                </Button>
            </TextGroup>
            <TextGroup>
                <Button>
                    Code
                </Button>
            </TextGroup>
        </ProjectBoxInner>
    </section>
);

export default Project;
