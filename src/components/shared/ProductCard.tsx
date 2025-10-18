import { ProductType } from '../../types/ProductType';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  products: ProductType;
}

export const ProductCard: React.FC<ProductCardProps> = ({ products }) => {
  const productDetailPage = process.env.REACT_APP_PRODUCT_DETAIL_PAGE;

  return (
    <Link to={`/${productDetailPage}/${products.id}`}>
      <li className="flex gap-3 snap-center min-w-[295px]">
        <article className="m-auto" key={products.id}>
          <img className="w-[295px] h-[297px]" src={products.image} alt={products.title} />
          <h4 className="text-base font-bold pt-2" data-testid="mock-product">
            {products.title}
          </h4>
          <div
            className="flex items-center gap-3 py-1 px-0"
            role="img"
            aria-label={`Avaliação: ${products.review} de 5 estrelas`}
          >
            <img src={products.starsReview} alt="Stars1" aria-hidden="true" />
            <p className="text-xs text-gray-500">{products.review}/5</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-xl font-bold text-black">${products.price}</p>
            {products.oldPrice && (
              <span className="line-through text-sm text-gray-400">${products.oldPrice}</span>
            )}
            {products.discount && <span className="text-sm text-red-500">{products.discount}</span>}
          </div>
        </article>
      </li>
    </Link>
  );
};
