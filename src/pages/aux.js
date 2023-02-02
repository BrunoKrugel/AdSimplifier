import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { encodeBase64 } from '@/lib/string/base64';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';
import axios from 'axios';

const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.user.value);
    console.log(e.target.password.value);
    console.log(encodeBase64(e.target.user.value));
    // axios.post(`${window.location.origin}/api/mongo/login`, {
    //     username: e.target.user.value,
    //     password: e.target.password.value,
    // }).then((response) => {
    //     console.log(response);
    // });
  };

const Aux = () => {
  return (
    <Layout>
      <Section grid>
      <form onSubmit={handleSubmit}>
          <TextField id="user" label="Usuário" variant="outlined" />
          <TextField
            id="password"
            label="Senha"
            variant="outlined"
            type="password"
          />
          {/* {isConnected
            ? console.log('DB connected')
            : console.log('DB not connected')} */}
          <div>
            <Button type="submit" variant="contained">
              Entrar
            </Button>
          </div>
      </form>
      </Section>
    </Layout>
  );
};

export default Aux;
