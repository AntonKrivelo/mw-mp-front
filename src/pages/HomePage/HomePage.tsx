import { Helmet } from 'react-helmet';
import './style.scss';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Главная - MW Marketplace</title>
      </Helmet>

      <h1>Главная - My Marketplace</h1>
    </>
  );
};

export default HomePage;
