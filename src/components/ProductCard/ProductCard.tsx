import { Product } from '../../dummyProducts';
import './ProductCard.scss';

const ProductCard: React.FC<Product> = ({
  id,
  title,
  imgSrc,
  priceRegular,
  priceDiscounted,
  desc,
  slug,
}) => {
  return (
    <>
      <div className="product__wrapper">
        <p className="product__title">{title}</p>
        <img className="product__img" src={imgSrc}></img>
        <p className="product__price">{priceRegular}</p>
        <p className="product__descr">{desc}</p>
      </div>
    </>
  );
};

export default ProductCard;
