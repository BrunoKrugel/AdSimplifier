import React from 'react';
import * as GS from '@/themes/globalTheme'
import LoginBox from '@/components/micros/LoginBox/LoginBox';
import MessageBox from "@/components/micros/MessageBox/MessageBox";
import errorIcon from "@/assets/warning-circle-svgrepo-com.svg";

const LoginPage = (props) => {

    return(
        <GS.LinearGradientBG>
            <GS.MessageContainer>
                {props.showMessage &&<MessageBox messageIcon={errorIcon.src} altText={"Erro"}
                                                 messageText={"Usuário e/ou senha incorretos"}/>}
            </GS.MessageContainer>
            <LoginBox setUsername={props.setUsername} setPassword={props.setPassword} handleSubmit={props.handleSubmit}/>
        </GS.LinearGradientBG>
    );
};

export default LoginPage;
