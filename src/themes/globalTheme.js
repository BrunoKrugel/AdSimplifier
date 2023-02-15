import styled from "styled-components";
import {adSimplifierTheme} from "@/themes/adSimplifier-theme";

export const LinearGradientBG = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, ${adSimplifierTheme.colors.darkCharcoal} 0%, ${adSimplifierTheme.colors.cyberGrape} 150%);
  gap: ${adSimplifierTheme.gap.mega};
`;

export const MessageContainer = styled.div`
  width: 400px;
  height: 30px;
  @media (max-width: 480px){
    width: 100%;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  height: ${props => props.height? props.height : "100%"};
  form{
    display: flex;
    width: 100%;
    height: 100%;
    gap: ${adSimplifierTheme.gap.mega};
    align-items: center;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  width: 80%;
  height: 40px;
  margin-top: 32px;
  font-family: ${adSimplifierTheme.fonts.roboto};
  font-size: 14px;
  font-weight: 600;
  color: ${adSimplifierTheme.colors.white};
  border-radius: ${adSimplifierTheme.borderRadius.bit};
  letter-spacing: 2px;
  background: ${adSimplifierTheme.colors.cyberGrape};
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  &:hover{
    cursor: pointer;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  width: 400px;
  height: ${props => props.boxHeight? props.boxHeight : "100%"};
  border-radius: ${adSimplifierTheme.borderRadius.byte};
  background-color: ${adSimplifierTheme.colors.white};
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 480px){
    width: 100%;
    border-radius: ${adSimplifierTheme.borderRadius.none};
  }
`;