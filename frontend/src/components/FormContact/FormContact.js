import React from "react";

import Form from "../Form/Form";
import Input from "../Input/Input";
import TextGroup from "../TextGroup/TextGroup";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";
import FormContactButtonBox from "./components/FormContactButtonBox";

const FormContact = () => (
    <TextGroup>
        <Form>
            <Input placeholder={"NAME"}/>
            <Input placeholder={"EMAIL"}/>
            <TextArea placeholder={"MESSAGE"}/>
            <FormContactButtonBox>
                <Button>
                    Send message
                </Button>
            </FormContactButtonBox>
        </Form>
    </TextGroup>
);

export default FormContact;
