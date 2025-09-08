import { useEffect, useState } from 'react';
import { CarrouselTestimonial } from '../../components/CarrouselTestimonial';
import { DefaultPage } from '../../components/DefaultPage';
import { ProductCard } from '../../components/shared/ProductCard';
import { TypographyH2 } from '../../components/Typography/TypographyH2';
import { useFetchProducts } from '../../hooks/useFetchProducts';
import { useParams } from 'react-router-dom';
import { ProductType } from '../../types/ProductType';
import { CarrouselProduct } from '../../components/CarrouselProduct.tsx';

export const ProductDetailsPage = () => {
  const { id } = useParams();
  const { products, testimonials } = useFetchProducts();

  const product = products.filter((p: ProductType) => p.review > 4.0);
  const filteredProducts = product.slice(0, 4);

  const [isTabletOrMobileCard, setIsTabletOrMobileCard] = useState(false);
  const [isTabletOrMobileTestimonial, setIsTabletOrMobileTestimonial] = useState(false);

  useEffect(() => {
    const checkScreenCard = () => {
      setIsTabletOrMobileCard(window.innerWidth <= 1024);
    };
    const checkScreenTestimonial = () => {
      setIsTabletOrMobileTestimonial(window.innerWidth <= 1440);
    };
    checkScreenCard();
    checkScreenTestimonial();
    window.addEventListener('resize', checkScreenCard);
    window.addEventListener('resize', checkScreenTestimonial);
    return () => {
      window.removeEventListener('resize', checkScreenCard);
      window.removeEventListener('resize', checkScreenTestimonial);
    };
  }, []);

  return (
    <DefaultPage>
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 mb-12 md:mb-24 lg:mb-36">
        <TypographyH2 text="All Reviews" />
        {isTabletOrMobileTestimonial ? (
          <CarrouselTestimonial testimonial={testimonials} layout="carrousel" />
        ) : (
          <CarrouselTestimonial testimonial={testimonials} layout="grid" />
        )}
      </div>

      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 mb-12 md:mb-24 lg:mb-36">
        <div className="text-center pb-12">
          <TypographyH2 text="YOU MIGHT ALSO LIKE" className="text-3xl font-bold" />
        </div>
        {isTabletOrMobileCard ? (
          <CarrouselProduct products={filteredProducts} layout="carrousel" />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} products={product} />
            ))}
          </div>
        )}
      </div>
    </DefaultPage>
  );
};
