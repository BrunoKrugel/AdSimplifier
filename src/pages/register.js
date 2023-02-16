import {handleCreate} from "@/components/utils/mongo/MongoCommunication";
import React, {useState} from "react";
import * as GS from '@/themes/globalTheme';
import RegisterBox from "@/components/micros/RegisterBox/RegisterBox";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [showMessage, setShowMessage] = React.useState(false);

    function handleSubmit(){
        console.log(username, password, email)
        if(username!=="" && password!=="" && email!==""
            && username.length>5 && /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)){
            // handleCreate(username, password, email).then(res => {
            //     if(res!==201) setShowMessage(true);
            //     else window.location.href = "/success";
            // })
            alert("Usuário criado com sucesso!");
        }else {
            alert("Usuário ou senha inválidos");
        }

    }

    return (
        <GS.LinearGradientBG>
            <RegisterBox setUsername={setUsername} setPassword={setPassword} username={username} password={password}
                         email={email} setEmail={setEmail} handleSubmit={handleSubmit}/>
        </GS.LinearGradientBG>
    );
};

export default Register;
