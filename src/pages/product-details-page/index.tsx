import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TypographyH2 } from '../../components/Typography/TypographyH2';
import { CarrouselTestimonial } from '../../components/CarrouselTestimonial';
import { CarrouselProduct } from '../../components/CarrouselProduct';
import { ProductCard } from '../../components/shared/ProductCard';
import { DefaultPage } from '../../components/DefaultPage';
import { ProductType } from '../../types/ProductType';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { adicionarProduto } from '../../features/counter/counterSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { useFetchProducts } from '../../hooks/useFetchProducts';
import debounce from 'lodash.debounce';
import { ProductDetailCard } from './ProductDetailCard';

export const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const idNumber = id ? Number(id) : undefined;

  const url = process.env.REACT_APP_PRODUCTS;

  //fazendo fetch da aplicação e armazenando os dados no products state e atualizando pelo setProducts
  const { products, testimonials } = useFetchProducts();

  const [quantity, setQuantity] = useState(1);
  const [isTabletOrMobileTestimonial, setIsTabletOrMobileTestimonial] = useState(false);
  const [isTabletOrMobileCard, setIsTabletOrMobileCard] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.counter.items);

  const filteredProducts = useMemo(
    () => products.filter((p: ProductType) => p.review > 4).slice(0, 4),
    [products]
  );

  const product = useMemo(
    () => products.find((t: ProductType) => t.id === idNumber),
    [products, idNumber]
  );

  console.log(products);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrMobileTestimonial(window.innerWidth <= 1440);
      setIsTabletOrMobileCard(window.innerWidth <= 1024);
    };

    const debouceResize = debounce(handleResize, 200);
    window.addEventListener('resize', debouceResize);
    return () => window.removeEventListener('resize', debouceResize);
  }, []);

  const imageURL = `${url}/${idNumber}/image`;
  const starsReviewImage = `${url}/${idNumber}/starsReviewImage`;

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        adicionarProduto({
          id: product?.id,
          name: product?.title,
          price: product?.price,
          quantity,
          image: imageURL,
        })
      );
    }
  };

  console.log(product!);

  return (
    <DefaultPage>
      <ProductDetailCard
        product={product!}
        imageURL={imageURL}
        starsReviewImage={starsReviewImage}
        quantity={quantity}
        setQuantity={setQuantity}
        handleAddToCart={handleAddToCart}
      />

      <div className="mx-4 my-5">
        <TypographyH2 text="All Reviews" />
        {isTabletOrMobileTestimonial ? (
          <CarrouselTestimonial testimonial={testimonials} layout="carrousel" />
        ) : (
          <CarrouselTestimonial testimonial={testimonials} layout="grid" />
        )}
      </div>

      <div className="mx-4 my-5">
        <TypographyH2
          text="YOU MIGHT ALSO LIKE"
          className="text-[2rem] font-bold text-center mb-6"
        />
        {isTabletOrMobileCard ? (
          <CarrouselProduct products={filteredProducts} layout="carrousel" />
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map(prod => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        )}
      </div>
    </DefaultPage>
  );
};
