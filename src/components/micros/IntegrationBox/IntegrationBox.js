import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, CardMedia } from '@mui/material';
import { padding } from '@mui/system';

const IntegrationBox = ({ buttonText, onClick }) => {
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
      {buttonText}
      <Button variant="contained" onClick={onClick}>
        Instalar
      </Button>
    </Box>
  );
};

IntegrationBox.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};
export { IntegrationBox };
