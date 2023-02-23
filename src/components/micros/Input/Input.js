import React from 'react';
import * as S from './InputStyles';

const Input = (props) => {
  function handleChange(e) {
    props.setChange(e.target.value);
  }
  return (
    <S.Container height={props.height}>
      <S.Label>{props.labelValue}</S.Label>
      <S.InputIcon src={props.icon.src} alt={'s'} />
      <S.Input
        placeholder={props.placeholderValue}
        type={props.type}
        onChange={handleChange}
        id={props.inputId}
      />
    </S.Container>
  );
};

export default Input;
