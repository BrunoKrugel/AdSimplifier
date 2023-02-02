import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';
import axios from 'axios';

const handleCreate = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(
      `${window.location.origin}/api/mongo/user`,
      {
        username: e.target.user.value,
        password: e.target.password.value,
        email: e.target.email.value,
      }
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(
      `${window.location.origin}/api/mongo/login`,
      {
        username: e.target.username.value,
        password: e.target.passwordlogin.value,
      }
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const Aux = () => {
  return (
    <Layout>
      <Section grid>
        <form onSubmit={handleCreate}>
          <TextField id="user" label="Usuário" variant="outlined" />
          <TextField id="email" label="E-mail" variant="outlined" />
          <TextField
            id="password"
            label="Senha"
            variant="outlined"
            type="password"
          />
          <div>
            <Button type="submit" variant="contained">
              Criar
            </Button>
          </div>
        </form>

        <form onSubmit={handleLogin}>
          <TextField id="username" label="Usuário" variant="outlined" />
          <TextField
            id="passwordlogin"
            label="Senha"
            variant="outlined"
            type="password"
          />
          <div>
            <Button type="submit" variant="contained">
              Login
            </Button>
          </div>
        </form>
      </Section>
    </Layout>
  );
};

export default Aux;
