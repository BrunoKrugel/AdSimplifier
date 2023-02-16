import React from "react";
import * as S from "./RegisterBoxStyles";
import * as GS from "@/themes/globalTheme";
import Input from "@/components/micros/Input/Input";
import lockIcon from "../../../assets/lock-svgrepo-com.svg";
import personIcon from "../../../assets/person-male-svgrepo-com.svg";
import emailIcon from "../../../assets/email-svgrepo-com.svg";
import {adSimplifierTheme} from "@/themes/adSimplifier-theme";

const RegisterBox = (props) => {
    const [userLineColor, setUserLineColor] = React.useState(adSimplifierTheme.colors.black10);
    const [passLineColor, setPassLineColor] = React.useState(adSimplifierTheme.colors.black10);
    const [emailLineColor, setEmailLineColor] = React.useState(adSimplifierTheme.colors.black10);
    function handleRegister(e){
        e.preventDefault();
        if(props.email!=="" && props.username.length>5
            && /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(props.password)){
            props.handleSubmit();
        }else {
            if(props.username.length<5 || props.username!=="") setUserLineColor(adSimplifierTheme.colors.englishVermillion);
        }

    }
    return (
        <GS.BoxContainer boxHeight={"500px"}>
            <S.MarginContainer>
                <S.Title>Registro</S.Title>
                <GS.FormContainer height={"80%"}>
                    <form onSubmit={handleRegister} autoComplete={"off"}>
                        <Input labelValue={"Usuário"} placeholderValue={"usuario123"} icon={personIcon}
                               inputId={"user"} setChange={props.setUsername}/>
                        <S.Line lineColor={userLineColor}/>
                        <Input labelValue={"Senha"} placeholderValue={"senha123"} type={"password"} icon={lockIcon}
                               inputId={"password"} setChange={props.setPassword}/>
                        <S.Line lineColor={passLineColor}/>
                        <Input labelValue={"Email"} placeholderValue={"usuario@email.com"} type={"email"} icon={emailIcon}
                               inputId={"email"} setChange={props.setEmail}/>
                        <S.Line lineColor={emailLineColor}/>
                        <GS.Button type={"submit"}>Cadastrar</GS.Button>
                    </form>
                </GS.FormContainer>
            </S.MarginContainer>
        </GS.BoxContainer>
    );
}

export default RegisterBox;