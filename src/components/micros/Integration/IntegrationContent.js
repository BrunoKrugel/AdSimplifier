import Link from 'next/link';
import { generateEndpoint } from '@/lib/string/endpoint';
import {
  Title,
  Text,
  SubText,
  Container,
  StyledLink,
} from './IntegrationContentStyled';
import { DisplayField } from '@/components/micros/DisplayField/Display';

const KiwifyLink = () => {
  return (
    <Link
      href="https://dashboard.kiwify.com.br/apps/webhooks/integrations"
      target="_blank"
    >
      <StyledLink>aqui</StyledLink>
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
      <Container>
        <DisplayField text={generateEndpoint('kiwify')} />
      </Container>

      <Text>
        2 - Clique <KiwifyLink /> e vá para a Kiwify
      </Text>
      <SubText>• Clique em &quot;Criar webhook&quot;</SubText>
      <SubText>• Cole no campo &quot;URL do Webhook&quot;</SubText>

      <Text>
        3 - Pronto, e lembre-se de não compartilhar este link com ninguém.
      </Text>
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
