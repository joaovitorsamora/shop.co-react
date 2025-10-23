import { ProductType } from '../src/types/ProductType';

export const mockProducts = {
  id: 1,
  image: 'fake-image.png',
  price: 99.99,
  review: 10,
  starsReviewImage: '5',
  title: 'Produto Teste',
  discount: '20%',
  oldPrice: 129.99,
};

export const mockProductsFromCarrousel: ProductType[] = [
  {
    id: 1,
    image: 'fake-image.png',
    price: 99.99,
    review: 10,
    starsReviewImage: 'https://cdn.fake.com/stars-5.svg',
    title: 'Produto Teste',
    discount: '20%',
    oldPrice: 129.99,
    // opcionais
    style: 'Casual',
    colors: ['#ffffff, #000000'],
    sizes: ['P, M, G'],
  },
];
