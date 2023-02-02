import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import React from 'react';
import axios from 'axios';
import Chart from '../components/chart/chart';

// import { parseSales } from '@/lib/kiwify/parser';


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
  const [startDate, setStartDate] = React.useState(
    dayjs('2023-01-01T00:00:00')
  );
  const [endDate, setEndDate] = React.useState(dayjs('2023-01-01T00:00:00'));

  const handleData = async (e) => {
    try {
      await axios.post(
        `${window.location.origin}/api/sales/kiwify`,
        {
          user_id: 'test',
          initialDate: startDate.format('YYYY-MM-DD'),
          endDate: endDate.format('YYYY-MM-DD'),
        }
      ).then((res) => {
        console.log(res.data);
        // parseSales(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleStart = (newValue) => {
    setStartDate(newValue);
  };

  const handleEnd = (newValue) => {
    setEndDate(newValue);
  };

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
        <br />
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
        <br />
        <Stack spacing={3}>
          <Button onClick={handleData} variant="contained">
            Click me
          </Button>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Initial Date"
              inputFormat="MM/DD/YYYY"
              value={startDate}
              onChange={handleStart}
              renderInput={(params) => <TextField {...params} />}
            />
            <DesktopDatePicker
              label="End Date"
              inputFormat="MM/DD/YYYY"
              value={endDate}
              onChange={handleEnd}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>

          <Chart />
        </Stack>
      </Section>
    </Layout>
  );
};

export default Aux;
