import {handleLogin} from "@/components/utils/mongo/MongoCommunication";
import React, {useState} from "react";
import * as GS from '@/themes/globalTheme'
import LoginBox from '@/components/micros/LoginBox/LoginBox';
import MessageBox from "@/components/micros/MessageBox/MessageBox";
import errorIcon from "@/assets/warning-circle-svgrepo-com.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showMessage, setShowMessage] = React.useState(false);

  function handleSubmit(e){
    e.preventDefault();
    handleLogin(username, password).then(res => {
      if(res!==200) setShowMessage(true);
      else window.location.href = "/success";
    })
  }

  return(
      <GS.LinearGradientBG>
        <GS.MessageContainer>
          {showMessage &&<MessageBox messageIcon={errorIcon.src} altText={"Erro"}
                                           messageText={"Usuário e/ou senha incorretos"}/>}
        </GS.MessageContainer>
        <LoginBox setUsername={setUsername} setPassword={setPassword} handleSubmit={handleSubmit}/>
      </GS.LinearGradientBG>
  );
};

export default Login;
