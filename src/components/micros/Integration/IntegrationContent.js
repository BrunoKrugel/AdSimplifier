import Link from 'next/link';
import { generateEndpoint } from '@/lib/string/endpoint';
import { Title, Text, Container } from './IntegrationContentStyled';

const KiwifyLink = () => {
  return (
    <Link
      href="https://dashboard.kiwify.com.br/apps/webhooks/integrations"
      target="_blank"
    >
      Kiwify
    </Link>
  );
};

const KiwifyContent = () => {
  return (
    <div>
      <Title>Descrição</Title>
      <Text>
        A integração com a plataforma Kiwify nos permite receber notificações de
        eventos que ocorrem na plataforma, e assim, melhorando nossas métricas.
      </Text>
      <Title>Passo a passo para a integração</Title>
      <Text>1 - Copie a URL no campo abaixo</Text>
      <Container></Container>

      <Text>2 - Clique aqui e vá para a Kiwify</Text>
    </div>
  );
};

const HotmartLink = () => {
  return (
    <Link href="https://app-vlc.hotmart.com/tools/webhook/" target="_blank">
      Hotmart
    </Link>
  );
};

export { KiwifyLink, HotmartLink, KiwifyContent };
