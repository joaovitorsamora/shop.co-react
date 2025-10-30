import { HeaderTopPromo } from '../HeaderTopPromo';
import { HeaderMenu } from '../HeaderMenu';
import { HeaderSearch } from '../HeaderSearch';
import { SidePanel } from '../SidePanel';
import { Search, ShoppingBag, User, LogOut } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearProfile } from '../../features/profile/profileSlice';

interface HeaderProps {
  logoText: string;
  renderIcon?: () => React.ReactNode;
  menuLinks?: Array<{ text: string; href: string }>;
  placeholder?: string;
  textPromo: string;
  textSignUp: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOpenFormModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  logoText,
  textPromo,
  textSignUp,
  renderIcon,
  menuLinks,
  placeholder,
  onChange,
  handleOpenFormModal,
}) => {
  const cartURL = process.env.REACT_APP_CART!;
  const [token, setToken] = useState(localStorage.getItem('token'));
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(clearProfile());
    setToken(null);
    window.location.reload();
  };

  return (
    <header>
      <HeaderTopPromo textPromo={textPromo} textSignUp={textSignUp} />
      <section className="flex justify-between items-center py-2.5 px-4">
        <HeaderMenu logoText={logoText} menuLinks={menuLinks} />

        <div className="flex-1 mx-4">
          <HeaderSearch onChange={onChange} placeholder={placeholder} />
        </div>

        <div className="flex items-center gap-4">
          <Search className="md:hidden" />
          {token ? (
            <LogOut className="w-6 h-6 text-black cursor-pointer" onClick={handleLogout} />
          ) : (
            <User className="w-6 h-6 text-black cursor-pointer" onClick={handleOpenFormModal} />
          )}
          <Link to={`/cart`}>
            <ShoppingBag />
          </Link>
        </div>
      </section>
    </header>
  );
};
