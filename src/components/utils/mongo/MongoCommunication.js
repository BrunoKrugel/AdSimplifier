import React from "react";
import axios from "axios";


export const handleCreate = async (user, pass, email) => {
    try {
        const response = await axios.post(
            `${window.location.origin}/api/mongo/user`,
            {
                username: user,
                password: pass,
                email: email,
            }
        );
        console.log(response);
    } catch (error) {
        console.error(error);
    }
};

export const handleLogin = async (user, pass) => {
    try {
        return (await axios.post(
            `${window.location.origin}/api/mongo/login`,
            {
                username: user,
                password: pass,
            }
        )).status;

    } catch (error) {
        return error.response.status;
    }
};