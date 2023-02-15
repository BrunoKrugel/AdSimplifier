import React from "react";
import * as S from "./RegisterBoxStyles";
import * as GS from "@/themes/globalTheme";
import Input from "@/components/micros/Input/Input";
import lockIcon from "../../../assets/lock-svgrepo-com.svg";
import personIcon from "../../../assets/person-male-svgrepo-com.svg";
import emailIcon from "../../../assets/email-svgrepo-com.svg";

const RegisterBox = (props) => {
    return (
        <GS.BoxContainer boxHeight={"500px"}>
            <S.MarginContainer>
                <S.Title>Registro</S.Title>
                <GS.FormContainer height={"80%"}>
                    <form onSubmit={props.handleSubmit}>
                        <Input labelValue={"Usuário"} placeholderValue={"usuario123"} icon={personIcon}
                               inputId={"user"} setChange={props.setUsername}/>
                        <S.Line/>
                        <Input labelValue={"Senha"} placeholderValue={"senha123"} type={"password"} icon={lockIcon}
                               inputId={"password"} setChange={props.setPassword}/>
                        <S.Line/>
                        <Input labelValue={"Email"} placeholderValue={"usuario@email.com"} type={"email"} icon={emailIcon}
                               inputId={"email"} setChange={props.setUsername}/>
                        <S.Line/>
                        <GS.Button type={"submit"}>Cadastrar</GS.Button>
                    </form>
                </GS.FormContainer>
            </S.MarginContainer>
        </GS.BoxContainer>
    );
}

export default RegisterBox;