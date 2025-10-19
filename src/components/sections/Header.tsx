import { HeaderTopPromo } from '../HeaderTopPromo';
import { HeaderMenu } from '../HeaderMenu';
import { HeaderSearch } from '../HeaderSearch';
import { SidePanel } from '../SidePanel';
import { Search, User } from 'lucide-react';

interface HeaderProps {
  logoText: string;
  renderIcon?: () => React.ReactNode;
  menuLinks?: Array<{ text: string; href: string }>;
  placeholder?: string;
  textPromo: string;
  textSignUp: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Header: React.FC<HeaderProps> = ({
  logoText,
  textPromo,
  textSignUp,
  renderIcon,
  menuLinks,
  placeholder,
  onChange,
}) => {
  return (
    <header>
      <HeaderTopPromo textPromo={textPromo} textSignUp={textSignUp} />
      <section className="flex justify-between items-center py-2.5 px-4">
        <HeaderMenu logoText={logoText} renderIcon={renderIcon} menuLinks={menuLinks} />

        <div className="flex-1 mx-4">
          <HeaderSearch onChange={onChange} placeholder={placeholder} />
        </div>

        <div className="flex items-center gap-4">
          <Search className="md:hidden" />
          <User className="w-6 h-6 text-black cursor-pointer" />
          <SidePanel />
        </div>
      </section>
    </header>
  );
};
