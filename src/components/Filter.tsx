import { Slider } from '../components/ui/slider';
import { useState } from 'react';

type FilterMenuProps = React.HTMLAttributes<HTMLElement>;

const colors = ['green', 'red', 'yellow', 'orange', 'cyan', 'purple', 'pink', 'white', 'black'];
const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'];
const dressStyles = ['Casual', 'Formal', 'Party', 'Gym'];
const categories = ['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'];

export function FilterMenu(props: FilterMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('cyan');
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState(200);
  const [maxPrice, setMaxPrice] = useState(800);

  const toggleSize = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };
  //: 'h-0 overflow-hidden

  return (
    <div
      className={`w-[295px] bg-white rounded-t-3xl transition-all duration-500 z-50 text-center 'h-auto pt-5 pb-10'}`}
      {...props}
    >
      <div className="flex justify-between px-5 pb-5">
        <p className="text-lg font-bold text-black">Filter</p>
        {/* <button className="text-black text-xl" onClick={() => setIsOpen(false)}>
          X
        </button> */}
      </div>

      <section className="px-4">
        <div className="flex flex-col gap-3 mb-6">
          {categories.map(cat => (
            <a key={cat} className="text-sm font-medium text-black" href="#">
              {cat}
            </a>
          ))}
        </div>

        <label className="block text-lg font-bold text-black mb-3">Price</label>
        {/* <div className="flex flex-col items-center mb-8">
          <div className="relative w-80 flex items-center">
            <div className="absolute h-1 bg-black w-9/12 rounded"></div>
            <input
              type="range"
              min={0}
              max={1000}
              value={minPrice}
              onChange={e => setMinPrice(Number(e.target.value))}
              className="absolute w-full pointer-events-none appearance-none bg-transparent z-10"
            />
            <input
              type="range"
              min={0}
              max={1000}
              value={maxPrice}
              onChange={e => setMaxPrice(Number(e.target.value))}
              className="absolute w-full pointer-events-none appearance-none bg-transparent z-10"
            />
          </div>
          <div className="flex justify-between w-80 mt-8">
            <span>{minPrice}</span>
            <span>{maxPrice}</span>
          </div>
        </div> */}
        <Slider defaultValue={[33]} max={100} step={1} />

        <label className="block text-lg font-bold text-black mb-3">Colors</label>
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

        <label className="block text-lg font-bold text-black mb-3">Size</label>
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

        <label className="block text-lg font-bold text-black mb-3">Dress Style</label>
        <div className="flex flex-col gap-2 mb-6">
          {dressStyles.map(style => (
            <a key={style} className="text-sm font-medium text-black" href="#">
              {style}
            </a>
          ))}
        </div>

        <button className="w-full max-w-xs mx-auto block bg-black text-white py-4 px-12 rounded-full font-medium text-sm">
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
