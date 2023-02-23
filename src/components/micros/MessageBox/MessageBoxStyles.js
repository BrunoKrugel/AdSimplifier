import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 8px;
  background: ${(props) =>
    props.messageBckgColor ? props.messageBckgColor : '#d84646'};
  border-radius: 4px;
`;

export const Message = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: ${(props) => (props.messageColor ? props.messageColor : '#ffedec')};
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
