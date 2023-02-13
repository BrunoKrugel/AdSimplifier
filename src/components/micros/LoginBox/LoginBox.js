import React, {useState} from "react";
import * as S from "./LoginBoxStyles";
import Input from "@/components/micros/Input/Input";
import lockIcon from "../../../assets/lock-svgrepo-com.svg";
import personIcon from "../../../assets/person-male-svgrepo-com.svg";
import {handleCreate, handleLogin} from "@/components/utils/mongo/MongoCommunication";
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";
import authenticate from "@/pages/api/mongo/login";

const LoginBox = (props) =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        handleLogin(username, password).then(res => {
            if(res!==200) props.setShowMessage(true);
            else window.location.href = "/success";
        })
    }


    return(
        <S.Container>
            <S.MarginContainer>
                <div style={{borderRadius:"30px",height:"60px", background:"#313131", width:"60px"}}></div>
                <S.Title>Bem vindo!</S.Title>
                <S.BottomContainer>
                    <form onSubmit={handleSubmit}>
                        <Input labelValue={"Usuário"} placeholderValue={"usuario@email.com"} icon={personIcon}
                               inputId={"user"} setChange={setUsername}/>
                        <S.Line/>
                        <Input labelValue={"Senha"} placeholderValue={"senha123"} type={"password"} icon={lockIcon}
                               inputId={"password"} setChange={setPassword}/>
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