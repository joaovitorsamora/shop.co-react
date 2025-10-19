import { ShoppingBag, PanelTopClose } from 'lucide-react';
import { useState } from 'react';

export const SidePanel = () => {
  const [largura, setLargura] = useState(0);

  const openNav = () => {
    setLargura(250);
  };

  const closeNav = () => {
    setLargura(0);
  };

  return (
    <>
      <div
        id="mySidepanel"
        style={{ width: `${largura}px` }}
        className={`h-full fixed z-10 top-0 left-0 bg-[#111] overflow-x-hidden pt-[60px] transition-[0.5]`}
      >
        <button className="absolute top-4 right-6 text-3xl text-white" onClick={closeNav}>
          <PanelTopClose />
        </button>
        <a href="#" className="block text-white p-4 hover:bg-gray-700">
          About
        </a>
        <a href="#" className="block text-white p-4 hover:bg-gray-700">
          Services
        </a>
        <a href="#" className="block text-white p-4 hover:bg-gray-700">
          Clients
        </a>
        <a href="#" className="block text-white p-4 hover:bg-gray-700">
          Contact
        </a>
      </div>

      <button className="text-xl text-black px-4 py-2" onClick={openNav}>
        <ShoppingBag />
      </button>
    </>
  );
};
