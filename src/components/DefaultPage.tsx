import { Header } from './sections/Header';
import { Menu, Search, ShoppingBag, User } from 'lucide-react';
import { NewsLetterSection } from './NewsLetterSection';
import { FooterSection } from './FooterSection';
import { Outlet } from 'react-router-dom';
import { ProfileForm } from './ProfileForm';
import { useState } from 'react';
export const DefaultPage = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="overflow-hidden">
      <Header
        logoText="SHOP.CO"
        renderIcon={() => <Menu />}
        menuLinks={[
          { text: 'Shop', href: '#' },
          { text: 'On Sale', href: '#onsale' },
          { text: 'New Arrivals', href: '#newarrivals' },
        ]}
        placeholder="Search for products"
        textPromo="Sign up and get 20% off to your first order."
        textSignUp="Sign Up Now"
        onChange={e => console.log(e.target.value)}
        handleOpenFormModal={() => setModal(true)}
      />
      <div className={className}>
        <Outlet />
        {children}
      </div>
      {modal && <ProfileForm onClose={() => setModal(false)} />}
      <NewsLetterSection />
      <FooterSection />
    </div>
  );
};
