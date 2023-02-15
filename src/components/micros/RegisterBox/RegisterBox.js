import React from "react";
import * as S from "./RegisterBoxStyles";
import * as GS from "@/themes/globalTheme";
import Input from "@/components/micros/Input/Input";
import lockIcon from "../../../assets/lock-svgrepo-com.svg";
import personIcon from "../../../assets/person-male-svgrepo-com.svg";
import emailIcon from "../../../assets/email-svgrepo-com.svg";

const RegisterBox = (props) => {
    return (
        <GS.BoxContainer boxHeight={"600px"}>
            <GS.FormContainer height={"100%"}>
                <Input labelValue={"Usuário"} placeholderValue={"usuario123"} icon={personIcon}
                       inputId={"user"} setChange={props.setUsername}/>
                <Input labelValue={"Senha"} placeholderValue={"senha123"} type={"password"} icon={lockIcon}
                       inputId={"password"} setChange={props.setPassword}/>
                <Input labelValue={"Email"} placeholderValue={"usuario@email.com"} type={"email"} icon={emailIcon}
                       inputId={"email"} setChange={props.setUsername}/>
                <GS.Button type={"submit"}>Cadastrar</GS.Button>
            </GS.FormContainer>
        </GS.BoxContainer>
    );
}

export default RegisterBox;