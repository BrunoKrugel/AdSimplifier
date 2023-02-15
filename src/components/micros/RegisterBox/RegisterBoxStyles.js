import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 400px;
  height: 600px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 480px){ 
    width: 100%;
    border-radius: 0;
  }
`;