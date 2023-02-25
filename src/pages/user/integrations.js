import { useState } from 'react';
import { Button } from '@mui/material';
import SlidePanel from '@/components/SlidePanel/SlidePanel';

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
      <Button variant="contained" onClick={handleOpen}>
        Open Slide Panel
      </Button>
      <SlidePanel isOpen={isOpen} onClose={handleClose}>
        <h1>Hello from the slide panel!</h1>
      </SlidePanel>
    </div>
  );
};

export default IntegrationsPage;
