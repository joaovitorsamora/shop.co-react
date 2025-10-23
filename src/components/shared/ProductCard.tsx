import { ProductType } from '../../types/ProductType';
import { Link } from 'react-router-dom';

export const ProductCard = ({ product }: { product: ProductType }) => {
  const productDetailPage = process.env.REACT_APP_PRODUCT_DETAIL_PAGE;
  return (
    <Link to={`/${productDetailPage}/${product.id}`}>
      <li className="flex gap-3 snap-center min-w-[295px]">
        <article className="m-auto" key={product.id}>
          <img className="w-[295px] h-[297px]" src={product.image} alt={product.title} />
          <h4 className="text-base font-bold pt-2" data-testid="mock-product">
            {product.title}
          </h4>
          <div
            className="flex items-center gap-3 py-1 px-0"
            role="img"
            aria-label={`Avaliação: ${product.review} de 5 estrelas`}
          >
            <img src={product.starsReviewImage} alt="Stars1" aria-hidden="true" />
            <p className="text-xs text-gray-500">{product.review}/5</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-xl font-bold text-black">${product.price}</p>
            {product.oldPrice && (
              <span className="line-through text-sm text-gray-400">${product.oldPrice}</span>
            )}
            {product.discount && <span className="text-sm text-red-500">{product.discount}</span>}
          </div>
        </article>
      </li>
    </Link>
  );
};
