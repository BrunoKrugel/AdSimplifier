import LoginPage from "@/components/LoginPage/LoginPage";
import {handleCreate, handleLogin} from "@/components/utils/mongo/MongoCommunication";
import React, {useState} from "react";

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

  return (
    <LoginPage showMessage={showMessage} setUsername={setUsername}
               setPassword={setPassword} handleSubmit={handleSubmit}/>
  );
};

export default Login;
