import { ShoppingBag, PanelTopClose } from 'lucide-react';
import { useState } from 'react';
import { Cart } from './Cart';

export const SidePanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full bg-[#111] z-20 overflow-x-hidden transition-all duration-500 ${
          isOpen ? 'w-80' : 'w-0'
        }`}
      >
        <button
          className="absolute top-4 right-4 text-3xl text-white"
          onClick={() => setIsOpen(false)}
        >
          <PanelTopClose />
        </button>
        <Cart />
      </div>
      <button
        className="flex items-center text-black p-3 transition"
        onClick={() => setIsOpen(true)}
      >
        <ShoppingBag />
      </button>
    </>
  );
};
