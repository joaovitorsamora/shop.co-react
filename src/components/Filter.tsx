import { Slider } from '../components/ui/slider';

import { useState } from 'react';

interface FilterMenuProps extends React.HTMLAttributes<HTMLElement> {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type TypePrice = number[];

const colors = ['green', 'red', 'yellow', 'orange', 'cyan', 'purple', 'pink', 'white', 'black'];

const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'];

const dressStyles = ['Casual', 'Formal', 'Party', 'Gym'];

const categories = ['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'];

export function FilterMenu({ isOpen, setIsOpen, ...props }: FilterMenuProps) {
  const [selectedColor, setSelectedColor] = useState('cyan');

  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const [minPrice] = useState(100);

  const [maxPrice] = useState(800);

  const [newPrice, setNewPrice] = useState<TypePrice>([minPrice, maxPrice]);

  const toggleSize = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };
  const formatedPrice = (price: number) => `$ ${price.toFixed(2).replace('.', ',')}`;

  return (
    <div
      className={`
          fixed bg-white shadow-xl z-50 border border-gray-200
          transition-transform duration-500 ease-out
          rounded-t-2xl xl:rounded-none
          bottom-0 left-0
          w-full h-[80vh]
          md:top-0 md:bottom-auto md:w-80 md:h-full md:rounded-none
          xl:static xl:block xl:w-[295px] xl:h-auto xl:translate-x-0 xl:translate-y-0 xl:z-auto xl:shadow-none xl:border-none
          ${
            isOpen
              ? 'translate-y-0 md:translate-x-0'
              : 'translate-y-full md:-translate-x-full xl:translate-x-0'
          }
        `}
      {...props}
    >
      <div className="flex justify-between px-5 pb-5">
        <p className="text-lg font-bold font-poppins text-black">Filter</p>

        <button className="text-black text-xl 2xl:hidden" onClick={() => setIsOpen(false)}>
          X
        </button>
      </div>

      <section className="px-4">
        <div className="flex flex-col gap-3 mb-6">
          {categories.map(cat => (
            <a key={cat} className="text-sm font-medium font-poppins text-black" href="#">
              {cat}
            </a>
          ))}
        </div>

        <label className="block text-lg font-bold font-poppins text-black mb-3">Price</label>

        <div className="py-6">
          <Slider
            defaultValue={[minPrice, maxPrice]}
            min={minPrice}
            max={maxPrice}
            value={newPrice}
            onValueChange={setNewPrice}
            step={5}
            className="bg-black"
          />

          <div className="flex gap-12 w-80 mt-8">
            <span>{formatedPrice(newPrice[0])}</span>

            <span>{formatedPrice(newPrice[1])}</span>
          </div>
        </div>

        <label className="block text-lg font-bold font-poppins text-black mb-3">Colors</label>

        <div className="flex flex-wrap gap-2 mb-8 justify-start">
          {colors.map(color => (
            <div
              key={color}
              className={`w-10 h-10 rounded-full border-2 ${selectedColor === color ? 'border-black' : 'border-gray-300'} relative cursor-pointer`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            >
              {selectedColor === color && (
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">
                  ✔
                </span>
              )}
            </div>
          ))}
        </div>

        <label className="block text-lg font-bold font-poppins text-black mb-3">Size</label>

        <div className="flex flex-wrap gap-2 mb-8">
          {sizes.map(size => (
            <div
              key={size}
              className={`px-4 py-2 rounded-full text-xs cursor-pointer ${selectedSizes.includes(size) ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
              onClick={() => toggleSize(size)}
            >
              {size}
            </div>
          ))}
        </div>

        <label className="block text-lg font-bold font-poppins text-black mb-3">Dress Style</label>

        <div className="flex flex-col gap-2 mb-6">
          {dressStyles.map(style => (
            <a key={style} className="text-sm font-medium font-poppins text-black" href="#">
              {style}
            </a>
          ))}
        </div>

        <button className="w-full max-w-xs mx-auto block bg-black font-poppins text-white py-4 px-12 rounded-full font-medium text-sm">
          Apply
        </button>
      </section>

      {/* {!isOpen && (

        <button

          className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded-full z-50"

          onClick={() => setIsOpen(true)}

        >

          Open Filter

        </button>

      )} */}
    </div>
  );
}
