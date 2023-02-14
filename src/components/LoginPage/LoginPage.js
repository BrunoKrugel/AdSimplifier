import React from 'react';
import * as S from './LoginStyles';
import LoginBox from '@/components/micros/LoginBox/LoginBox';
import MessageBox from "@/components/micros/MessageBox/MessageBox";
import errorIcon from "@/assets/warning-circle-svgrepo-com.svg";

const LoginPage = (props) => {

    return(
        <S.Container>
            <S.MessageContainer>
                {props.showMessage &&<MessageBox messageIcon={errorIcon.src}/>}
            </S.MessageContainer>
            <LoginBox setUsername={props.setUsername} setPassword={props.setPassword} handleSubmit={props.handleSubmit}/>
        </S.Container>
    );
};

export default LoginPage;
