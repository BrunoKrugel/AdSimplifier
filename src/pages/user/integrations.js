import { useState } from 'react';
import SlidePanel from '@/components/SlidePanel/SlidePanel';
import { IntegrationBox } from '@/components/micros/IntegrationBox/IntegrationBox';
import { KiwifyIcon } from '@/components/micros/Icons/icons';
import { KiwifyContent } from '@/components/micros/Integration/IntegrationContent';

const IntegrationsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [integrationBox, setIntegration] = useState({});

  const handleKiwify = () => {
    setIsOpen(true);
    setIntegration({
      name: 'Kiwify',
      icon: <KiwifyIcon size={40} />,
      content: <KiwifyContent />,
    });
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <IntegrationBox onClick={handleKiwify} buttonText="Kiwify" />
      <SlidePanel
        isOpen={isOpen}
        onClose={handleClose}
        icon={integrationBox.icon}
        name={integrationBox.name}
        content={integrationBox.content}
      ></SlidePanel>
    </div>
  );
};

export default IntegrationsPage;
