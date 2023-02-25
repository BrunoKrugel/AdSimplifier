import { useState } from 'react';
import { Button } from '@mui/material';
import SlidePanel from '@/components/SlidePanel/SlidePanel';
import { IntegrationBox } from '@/components/micros/IntegrationBox/IntegrationBox';

const IntegrationsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <IntegrationBox onClick={handleOpen} buttonText="Kiwify" />
      <SlidePanel isOpen={isOpen} onClose={handleClose}>
        <h1>Hello from the slide panel!</h1>
      </SlidePanel>
    </div>
  );
};

export default IntegrationsPage;
