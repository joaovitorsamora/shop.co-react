import { Minus, Plus } from 'lucide-react';
import { TypographyH3 } from '../../components/Typography/TypographyH3';
import { Button } from '../../components/ui/button';
import { ProductType } from '../../types/ProductType';
import { useState } from 'react';

interface ProductDetailCardProps {
  product: ProductType;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  imageURL: string;
  starsReviewImage: string;
  handleAddToCart: () => void;
}

export const ProductDetailCard = ({
  product,
  quantity,
  setQuantity,
  handleAddToCart,
  imageURL,
  starsReviewImage,
}: ProductDetailCardProps) => {
  const [selectedSize, setSelectedSize] = useState<string[]>([]);
  const toggleSize = (size: string) => {
    setSelectedSize(prev => (prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]));
  };
  return (
    <div className="px-4 lg:px-24 py-9 flex flex-col lg:flex-row gap-10">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-6">
        <img
          src={imageURL}
          alt={product?.title}
          className="w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[550px] object-cover rounded-lg"
        />
      </div>

      <div className="flex-1 flex flex-col gap-6">
        <TypographyH3>{product?.title}</TypographyH3>

        <div className="flex items-center gap-3">
          <img src={starsReviewImage} alt="Stars" aria-hidden="true" />
          <p className="text-gray-600 text-sm">{product?.review}/5</p>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-2xl font-bold text-black">${product?.price}</p>
          {product?.oldPrice && (
            <p className="text-2xl font-bold text-gray-400 line-through">${product?.oldPrice}</p>
          )}
          {product?.discount && (
            <span className="text-xs bg-red-100 text-red-500 rounded-full px-3 py-1">
              {product?.discount}
            </span>
          )}
        </div>

        <p className="text-sm text-gray-600">
          This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable
          fabric, it offers superior comfort and style.
        </p>
        <section>
          <TypographyH3 className="text-sm text-black font-bold mb-4" text="Choose Size" />
          <div className="flex gap-2 flex-wrap">
            {['Small', 'Medium', 'Large', 'X-Large'].map(size => (
              <button
                key={size}
                className={`px-5 py-2 rounded-full text-sm ${selectedSize.includes(size) ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
                onClick={() => toggleSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <div className="flex items-center justify-around bg-gray-200 rounded-full px-6 py-2 lg:w-5/6 md:w-1/2 sm:w-1/12 gap-3 max-w-[400px]">
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
          <Button
            className="bg-black text-white px-6 py-5 rounded-full font-semibold max-w-[400px]"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </section>
      </div>
    </div>
  );
};
