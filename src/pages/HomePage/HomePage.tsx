import { Helmet } from 'react-helmet';
import { products } from '../../dummyProducts';
import ProductCard from '../../components/ProductCard/ProductCard';
import './style.scss';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title className="title__header">Главная - MW Marketplace</title>
      </Helmet>
      <h1 className="home__header-title">Главная - My Marketplace</h1>
      <div className="cards__wrapper">
        <h2>Рекомендуемые товары</h2>
        <div className="card__wrapper">
          {products.map((p) => (
            <ProductCard {...p} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
