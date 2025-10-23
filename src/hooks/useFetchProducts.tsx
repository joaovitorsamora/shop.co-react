import useSWR from 'swr';
import { ProductType } from '../types/ProductType';
import { TestimonialTypes } from '../types/TestimonialTypes';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const fetcher = async () => {
  const [productsRes, testimonialsRes] = await Promise.all([
    fetch(`${BASE_URL}/products`),
    fetch(`${BASE_URL}/testimonials`),
  ]);

  const productsData = await productsRes.json();
  const testimonialsData = await testimonialsRes.json();

  const formattedProducts: ProductType[] = productsData.map((product: any) => ({
    ...product,
    image: Array.isArray(product.image)
      ? `${BASE_URL}${product.image[0]}`
      : `${BASE_URL}${product.image}`,
    starsReviewImage: `${BASE_URL}${product.starsReviewImage}`,
  }));

  const formattedTestimonials: TestimonialTypes[] = testimonialsData.map((testimonial: any) => ({
    ...testimonial,
    verificationImage: `${BASE_URL}${testimonial.verificationImage}`,
    starsReviewImage: `${BASE_URL}${testimonial.starsReviewImage}`,
  }));

  return {
    products: formattedProducts,
    testimonials: formattedTestimonials,
  };
};

export const useFetchProducts = () => {
  const { data, error } = useSWR('fetch-products-and-testimonials', fetcher, {
    suspense: true,
  });

  return {
    products: data?.products || [],
    testimonials: data?.testimonials || [],
    error,
  };
};
