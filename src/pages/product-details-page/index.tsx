import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TypographyH2 } from '../../components/Typography/TypographyH2';
import { TypographyH3 } from '../../components/Typography/TypographyH3';
import { CarrouselTestimonial } from '../../components/CarrouselTestimonial';
import { CarrouselProduct } from '../../components/CarrouselProduct';
import { ProductCard } from '../../components/shared/ProductCard';
import { DefaultPage } from '../../components/DefaultPage';
import { useFetchProducts } from '../../hooks/useFetchProducts';
import { ProductType } from '../../types/ProductType';
import { Plus, Minus } from 'lucide-react';
import { Button } from '../../components/ui/button';

export const ProductDetailsPage = () => {
  const { id } = useParams();
  const { products, testimonials } = useFetchProducts();
  const filteredProducts = products.filter((p: ProductType) => p.review > 4).slice(0, 4);

  const [productData, setProductData] = useState<ProductType | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isTabletOrMobileTestimonial, setIsTabletOrMobileTestimonial] = useState(false);
  const [isTabletOrMobileCard, setIsTabletOrMobileCard] = useState(false);

  const productsApiURL = process.env.REACT_APP_PRODUCTS;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${productsApiURL}/${id}`);
        const data = await response.json();
        setProductData(data || null);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrMobileTestimonial(window.innerWidth <= 1440);
      setIsTabletOrMobileCard(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imageURL = `${productsApiURL}/${id}/image`;
  const starsReviewImage = `${productsApiURL}/${id}/starsReviewImage`;

  return (
    <DefaultPage>
      <div className="px-4 lg:px-24 py-9 flex flex-col lg:flex-row gap-10">
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-6">
          <img
            src={imageURL}
            alt={productData?.title}
            className="w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[550px] object-cover rounded-lg"
          />
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <TypographyH3>{productData?.title}</TypographyH3>

          <div className="flex items-center gap-3">
            <img src={starsReviewImage} alt="Stars" aria-hidden="true" />
            <p className="text-gray-600 text-sm">{productData?.review}/5</p>
          </div>

          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold text-black">${productData?.price}</p>
            {productData?.oldPrice && (
              <p className="text-2xl font-bold text-gray-400 line-through">
                ${productData?.oldPrice}
              </p>
            )}
            {productData?.discount && (
              <span className="text-xs bg-red-100 text-red-500 rounded-full px-3 py-1">
                {productData?.discount}
              </span>
            )}
          </div>

          <p className="text-sm text-gray-600">
            This graphic t-shirt which is perfect for any occasion. Crafted from a soft and
            breathable fabric, it offers superior comfort and style.
          </p>
          <section>
            <TypographyH3 className="text-sm text-black font-bold mb-4" text="Choose Size" />
            <div className="flex gap-2 flex-wrap">
              {['Small', 'Medium', 'Large', 'X-Large'].map(size => (
                <button
                  key={size}
                  className="px-5 py-2 rounded-full bg-gray-200 text-gray-600 text-sm"
                >
                  {size}
                </button>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <div className="flex items-center justify-around bg-gray-200 rounded-full px-6 py-2 lg:w-5/6 md:w-1/2 sm:w-1/12 gap-3">
              <Button onClick={() => setQuantity(prev => Math.max(prev - 1, 1))} className="p-2">
                <Minus />
              </Button>
              <input
                type="text"
                className="w-12 text-center border rounded bg-gray-200 outline-none"
                value={quantity}
                readOnly
              />
              <Button onClick={() => setQuantity(prev => prev + 1)} className="p-2">
                <Plus />
              </Button>
            </div>
            <Button className="bg-black text-white px-6 py-5 rounded-full font-semibold max-w-[400px]">
              Add to Cart
            </Button>
          </section>
        </div>
      </div>

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
              <ProductCard key={prod.id} products={prod} />
            ))}
          </div>
        )}
      </div>
    </DefaultPage>
  );
};
