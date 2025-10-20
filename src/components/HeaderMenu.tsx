import { useState, useRef } from 'react';
import { TypographyH1 } from './Typography/TypographyH1';
import { Menu } from 'lucide-react';

interface HeaderMenuProps {
  logoText: string;
  menuLinks?: Array<{ text: string; href: string }>;
}

export const HeaderMenu: React.FC<HeaderMenuProps> = ({ logoText, menuLinks = [] }) => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const toggle = () => setOpenDropDown(v => !v);

  return (
    <div className="relative flex items-center gap-4">
      <button type="button" onClick={toggle} aria-expanded={openDropDown} className="p-1 lg:hidden">
        <Menu />
      </button>
      {openDropDown && (
        <div
          className="absolute left-0 top-full mt-2 bg-white border rounded shadow-lg lg:hidden z-50"
          onBlur={() => setOpenDropDown(false)}
        >
          {menuLinks?.map((link, index) => (
            <option
              key={link.href || index}
              value={link.href}
              className="text-black hover:bg-slate-800 hover:text-slate-50"
            >
              {link.text}
            </option>
          ))}
        </div>
      )}

      <TypographyH1 text={logoText} className="text-2xl font-bold" />
      <nav className="hidden lg:flex sm:hidden">
        <ul className="flex gap-4">
          {menuLinks?.map((link, index) => (
            <li key={index}>
              <a className="no-underline text-black" href={link.href}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
