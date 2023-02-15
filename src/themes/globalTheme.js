import styled from "styled-components";

export const LinearGradientBG = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #313131 0%, #4D3D70 150%);
  gap: 16px;
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
    gap: 16px;
    align-items: center;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  width: 80%;
  height: 40px;
  margin-top: 32px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  border-radius: 4px;
  letter-spacing: 2px;
  background: #4D3D70;
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
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 480px){
    width: 100%;
    border-radius: 0;
  }
`;