import React from 'react';
import * as S from './LoginBoxStyles';
import * as GS from '@/themes/globalTheme';
import Input from '@/components/micros/Input/Input';
import lockIcon from '../../../assets/lock-svgrepo-com.svg';
import personIcon from '../../../assets/person-male-svgrepo-com.svg';

const LoginBox = (props) => {
  function handleRegister() {
    window.location.href = '/register';
  }
  return (
    <GS.BoxContainer boxHeight={'500px'}>
      <S.MarginContainer>
        <div
          style={{
            borderRadius: '30px',
            height: '60px',
            background: '#313131',
            width: '60px',
          }}
        ></div>
        <S.Title>Bem vindo!</S.Title>
        <GS.FormContainer height={'60%'}>
          <form onSubmit={props.handleSubmit}>
            <Input
              labelValue={'Usuário'}
              placeholderValue={'usuario123'}
              icon={personIcon}
              inputId={'user'}
              setChange={props.setUsername}
            />
            <S.Line />
            <Input
              labelValue={'Senha'}
              placeholderValue={'senha123'}
              type={'password'}
              icon={lockIcon}
              inputId={'password'}
              setChange={props.setPassword}
            />
            <S.Line />
            <GS.Button type={'submit'}>Login</GS.Button>
          </form>
        </GS.FormContainer>
        <S.CreateAccount>
          <button onClick={handleRegister}>Criar uma conta</button>
        </S.CreateAccount>
      </S.MarginContainer>
    </GS.BoxContainer>
  );
};

export default LoginBox;
