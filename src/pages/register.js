import {handleCreate} from "@/components/utils/mongo/MongoCommunication";
import React, {useState} from "react";
import RegisterPage from "@/components/RegisterPage/RegisterPage";

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
        <RegisterPage showMessage={showMessage} setUsername={setUsername}
                   setPassword={setPassword} handleSubmit={handleSubmit}/>
    );
};

export default Register;
