import React from "react";
import * as S from "./MessageBoxStyles";

const MessageBox = props =>{
    return(
        <S.Container>
            <S.Icon src={props.messageIcon} alt={"Erro"}/>
            <S.Message>Usuário e/ou senha incorretos</S.Message>
        </S.Container>
    );
};

export default MessageBox;