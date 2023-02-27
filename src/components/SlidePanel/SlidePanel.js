import React from 'react';
import { Box, Drawer, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { Title, ContainerTitle } from './SlidePanelStyles';
import { HorizontalLine } from '@/components/micros/Line/Line';

const SlidePanel = (props) => {
  return (
    <Drawer anchor="right" open={props.isOpen} onClose={props.onClose}>
      <Box sx={{ width: 400, padding: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={props.onClose}>
            <Close />
          </IconButton>
        </Box>
        <ContainerTitle>
          {props.icon}
          <Title>Integração com {props.name}</Title>
        </ContainerTitle>
        <HorizontalLine />
        {props.content}
      </Box>
    </Drawer>
  );
};

export default SlidePanel;
