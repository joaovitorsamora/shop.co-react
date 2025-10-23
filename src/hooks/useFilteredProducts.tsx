import { ProductType } from '../types/ProductType';
import { useFetchProducts } from './useFetchProducts';

export const useFilteredProducts = () => {
  const { products } = useFetchProducts();

  const filteredProducts = products.filter((product: ProductType) => product.review > 4.0) ?? [];

  return { filteredProducts };
};
