import styled from "styled-components";

export const MarginContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 32px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 480px){
    margin: 16px;
  }
`;

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 28px;
  font-weight: 900;
  color: ${props => props.color? props.color : "#434346"};
  text-align: center;
`;

export const Line = styled.hr`
  width: 100%;
  border-top: 2px solid #d2d2d0;
`;

export const CreateAccount = styled.div`
  display: flex;
  width: 100%;
  height: 14px;
  justify-content: center;
  button{
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: ${props => props.color? props.color : "#695791"};
    border: none;
    background: transparent;
    &:hover{
      cursor: pointer;
    }
  }
`;