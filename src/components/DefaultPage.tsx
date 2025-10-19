import { Header } from './sections/Header';
import { Menu, Search, ShoppingBag, User } from 'lucide-react';
import { NewsLetterSection } from './NewsLetterSection';
import { FooterSection } from './FooterSection';
import { Outlet } from 'react-router-dom';
export const DefaultPage = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div>
      <Header
        logoText="SHOP.CO"
        renderIcon={() => <Menu />}
        menuLinks={[
          { text: 'Shop', href: '#' },
          { text: 'On Sale', href: '#' },
          { text: 'New Arrivals', href: '#' },
          { text: 'Brands', href: '#' },
        ]}
        placeholder="Search for products"
        textPromo="Sign up and get 20% off to your first order."
        textSignUp="Sign Up Now"
        onChange={e => console.log(e.target.value)}
      />
      <div className={className}>
        <Outlet />
        {children}
      </div>
      <NewsLetterSection />
      <FooterSection />
    </div>
  );
};
