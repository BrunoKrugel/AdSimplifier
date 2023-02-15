import {handleCreate} from "@/components/utils/mongo/MongoCommunication";
import React, {useState} from "react";
import * as GS from '@/themes/globalTheme';
import RegisterBox from "@/components/micros/RegisterBox/RegisterBox";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [showMessage, setShowMessage] = React.useState(false);

    function handleSubmit(e){
        e.preventDefault();
        handleCreate(username, password, email).then(res => {
            if(res!==200) setShowMessage(true);
            else window.location.href = "/success";
        })
    }

    return (
        <GS.LinearGradientBG>
            <RegisterBox setUsername={setUsername} setPassword={setPassword}
                         setEmail={setEmail} handleSubmit={handleSubmit}/>
        </GS.LinearGradientBG>
    );
};

export default Register;
