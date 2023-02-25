import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Drawer, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

const SlidePanel = ({ isOpen, onClose, children }) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <Box sx={{ width: 400 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
        {children}
      </Box>
    </Drawer>
  );
};

SlidePanel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default SlidePanel;
