import React from "react";
import axios from "axios";

export const handleCreate = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(
            `${window.location.origin}/api/mongo/user`,
            {
                username: e.target.user.value,
                password: e.target.password.value,
                email: e.target.email.value,
            }
        );
        console.log(response);
    } catch (error) {
        console.error(error);
    }
};

export const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(
            `${window.location.origin}/api/mongo/login`,
            {
                username: e.target.username.value,
                password: e.target.passwordlogin.value,
            }
        );
        console.log(response);
    } catch (error) {
        console.error(error);
    }
};