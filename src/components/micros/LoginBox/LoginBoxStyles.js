import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 400px;
  height: 500px;
  border-radius: 8px;
  background-color: #ffffff;
`;

export const MarginContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 32px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 28px;
  font-weight: 900;
  color: ${props => props.color? props.color : "#434346"};
  text-align: center;
`;

export const Button = styled.button`
  width: 80%;
  height: 40px;
  margin-top: 32px;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  border-radius: 12px;
  letter-spacing: 2px;
  background: linear-gradient(180deg, #313131 0%, #4D3D70 130%);
  border: none;
`;

export const Line = styled.hr`
  width: 100%;
  border-top: 2px solid #d2d2d0;
`;

export const BottomContainer = styled.div`
  width: 100%;
  height: 60%;
  form{
    display: flex;
    width: 100%;
    height: 100%;
    gap: 16px;
    align-items: center;
    flex-direction: column;
  }
`;

export const ForgotPassword = styled.div`
  display: flex;
  width: 100%;
  height: 14px;
  align-items: flex-end;
  justify-content: flex-end;
  button{
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 12px;
    color: ${props => props.color? props.color : "#B8B8B7"};
    border: none;
    background: transparent;
  }
`;