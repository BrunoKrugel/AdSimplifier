import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Chart from '../components/chart/chart';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Chart />
      </Section>
    </Layout>
  );
};

export default Home;
