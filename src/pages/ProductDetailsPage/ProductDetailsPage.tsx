import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams();

  return (
    <div>
      <Helmet>
        <title>Страница продукта - MW Marketplace</title>
      </Helmet>
      <h1>
        Страница продукта <span style={{ color: 'red' }}>{id}</span> - MW Marketplace
      </h1>
    </div>
  );
};

export default ProductDetailsPage;
