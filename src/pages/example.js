import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import React from 'react';
import axios from 'axios';
import Chart from '../components/chart/Bar';
import ChartDoughnut from '../components/chart/Doughnut';

import { ArrayOfDates } from '@/lib/dates/date';

import { parseSales, organizePayment } from '@/lib/kiwify/parser';

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
  const [chart, setChart] = React.useState('');

  const [startDate, setStartDate] = React.useState(dayjs());
  const [endDate, setEndDate] = React.useState(dayjs());
  const [sales, setSales] = React.useState([]);
  const [product, setProduct] = React.useState([]);
  const [payment, setPayment] = React.useState([]);

  const handleData = async (e) => {
    try {
      await axios
        .post(`${window.location.origin}/api/sales/kiwify`, {
          user_id: 'lucas.bozio',
          initialDate: startDate.format('YYYY-MM-DD'),
          endDate: endDate.format('YYYY-MM-DD'),
        })
        .then((res) => {
          setSales(parseSales(res.data, ArrayOfDates(startDate, endDate)));
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDataInfo = async (e) => {
    try {
      await axios
        .post(`${window.location.origin}/api/sales/product`, {
          user_id: 'lucas.bozio',
          initialDate: startDate.format('YYYY-MM-DD'),
          endDate: endDate.format('YYYY-MM-DD'),
        })
        .then((res) => {
          setSales(parseSales(res.data, ArrayOfDates(startDate, endDate)));
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDataPayment = async (e) => {
    try {
      await axios
        .post(`${window.location.origin}/api/sales/payment`, {
          user_id: 'lucas.bozio',
          initialDate: startDate.format('YYYY-MM-DD'),
          endDate: endDate.format('YYYY-MM-DD'),
        })
        .then((res) => {
          setPayment(organizePayment(res.data));
          console.log(organizePayment(res.data));
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setChart(event.target.value);
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
          <TextField id="user" label="Usu??rio" variant="outlined" />
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
          <TextField id="username" label="Usu??rio" variant="outlined" />
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
            Get Sales
          </Button>
          <Button onClick={handleDataInfo} variant="contained">
            Get Sales Info
          </Button>
          <Button onClick={handleDataPayment} variant="contained">
            Get Payment
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
          <FormControl fullWidth>
            <InputLabel id="chart-type-label">Chart Type</InputLabel>
            <Select
              labelId="chart-type-label"
              id="chart-type"
              defaultValue={10}
              value={chart}
              label="Chart Type"
              onChange={handleChange}
            >
              <MenuItem value={10}>Line</MenuItem>
              <MenuItem value={20}>Bar</MenuItem>
            </Select>
          </FormControl>
          <Chart
            labels={sales.arrDates}
            dataset={sales.chartData}
            type={chart}
          />
          <ChartDoughnut labels={payment.labels} data={payment.data} />
        </Stack>
      </Section>
    </Layout>
  );
};

export default Aux;
