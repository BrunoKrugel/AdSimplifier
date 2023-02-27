import React from 'react';
import { Box, Button, CardMedia } from '@mui/material';

const IntegrationBox = (props) => {
  return (
    <Box
      sx={{
        width: 120,
        height: 140,
        backgroundColor: 'secondary.light',
        borderRadius: 4,
        border: '2px solid transparent',
        transition: 'border-color 0.2s',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 1,
        '&:hover': {
          borderColor: 'primary.main',
          backgroundColor: 'secondary.light',
        },
      }}
    >
      <CardMedia component="img" image="/Kiwify.svg" sx={{ width: 45 }} />
      {props.buttonText}
      <Button variant="contained" onClick={props.onClick}>
        Instalar
      </Button>
    </Box>
  );
};
export { IntegrationBox };
