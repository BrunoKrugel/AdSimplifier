import React from "react";
import * as S from "./LoginBoxStyles";
import Input from "@/components/micros/Input/Input";
import lockIcon from "../../../assets/lock-svgrepo-com.svg";
import personIcon from "../../../assets/person-male-svgrepo-com.svg";

const LoginBox = (props) =>{

    return(
        <S.Container>
            <S.MarginContainer>
                <div style={{borderRadius:"30px",height:"60px", background:"#313131", width:"60px"}}></div>
                <S.Title>Bem vindo!</S.Title>
                <S.BottomContainer>
                    <form onSubmit={props.handleSubmit}>
                        <Input labelValue={"Usuário"} placeholderValue={"usuario@email.com"} icon={personIcon}
                               inputId={"user"} setChange={props.setUsername}/>
                        <S.Line/>
                        <Input labelValue={"Senha"} placeholderValue={"senha123"} type={"password"} icon={lockIcon}
                               inputId={"password"} setChange={props.setPassword}/>
                        <S.Line/>
                        <S.ForgotPassword><button>Esqueci a senha</button></S.ForgotPassword>
                        <S.Button type={"submit"}>ACESSAR</S.Button>
                    </form>
                </S.BottomContainer>
            </S.MarginContainer>
        </S.Container>
    );
}

export default LoginBox;