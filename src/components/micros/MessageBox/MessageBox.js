import React from 'react';
import * as S from './MessageBoxStyles';

const MessageBox = (props) => {
  return (
    <S.Container>
      <S.Icon src={props.messageIcon} alt={props.altText} />
      <S.Message>{props.messageText}</S.Message>
    </S.Container>
  );
};

export default MessageBox;
