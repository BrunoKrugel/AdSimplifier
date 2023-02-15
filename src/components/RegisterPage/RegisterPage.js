import React from "react";
import * as GS from '@/themes/globalTheme';
import RegisterBox from "@/components/micros/RegisterBox/RegisterBox";
const RegisterPage = (props) => {
    return (
        <GS.LinearGradientBG>
            <RegisterBox/>
        </GS.LinearGradientBG>
    );
}

export default RegisterPage;