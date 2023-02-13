import React from "react";
import * as S from "./LoginPageStyles";
import LoginBox from "@/components/micros/LoginBox/LoginBox";
import MessageBox from "@/components/micros/MessageBox/MessageBox";
import errorIcon from "../../assets/warning-circle-svgrepo-com.svg";

const LoginPage = () => {

    const [showMessage, setShowMessage] = React.useState(false);
    return(
        <S.Container>
            <S.MessageContainer>
                {showMessage &&<MessageBox messageIcon={errorIcon.src}/>}
            </S.MessageContainer>
            <LoginBox setShowMessage={setShowMessage}/>
        </S.Container>
    );
};

export default LoginPage;