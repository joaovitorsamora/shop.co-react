import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeaderTopPromo } from '../../HeaderTopPromo';
import { HeaderMenu } from '../../HeaderMenu';
import { HeaderSearch } from '../../HeaderSearch';
import { HeaderIcons } from '../../HeaderIcons';
import userEvent from '@testing-library/user-event';
import { Header } from '../Header';
import { mockHeaderIcons } from '../../../../__mocks__/HeaderIconsMock';
import '@testing-library/jest-dom';

describe('Header', () => {
  const handleChange = jest.fn();

  it('renderiza Header e promo corretamente', () => {
    render(
      <Header
        logoText="SHOP.CO"
        menuLinks={[
          { text: 'Shop', href: '#' },
          { text: 'On Sale', href: '#' },
          { text: 'New Arrivals', href: '#' },
          { text: 'Brands', href: '#' },
        ]}
        icons={[
          { icon: <img src={'./assets/pesquisa-icon.png'} alt="Logo" />, href: '#' },
          { icon: <img src={'./assets/shop-icon.png'} alt="Logo" />, href: '#' },
          { icon: <img src={'./assets/profile-icon.png'} alt="Logo" />, href: '#' },
        ]}
        textSignUp="Sign Up Now"
        textPromo="Sign up and get 20% off to your first order."
        onChange={handleChange}
        placeholder="Search for products"
        renderIcon={() => <img src={'./assets/menu-icon.png'} alt="Logo" />}
      />
    );

    render(
      <HeaderTopPromo
        textPromo="Sign up and get 20% off to your first order."
        textSignUp="Sign Up Now"
      />
    );

    expect(screen.getAllByText('Sign up and get 20% off to your first order.')).toHaveLength(2);

    expect(screen.getAllByText('Sign Up Now')).toHaveLength(2);
    expect(screen.getByText('SHOP.CO')).toBeInTheDocument;
    expect(screen.getByText('Shop')).toBeInTheDocument;

    // pega todos os ícones por alt
    expect(screen.getAllByAltText('Logo')).toHaveLength(4);
  });

  it('renderiza HeaderMenu, HeaderIcons e HeaderSearch', async () => {
    render(
      <HeaderMenu
        logoText="SHOP.CO"
        menuLinks={[
          { text: 'Shop', href: '#' },
          { text: 'On Sale', href: '#' },
          { text: 'New Arrivals', href: '#' },
          { text: 'Brands', href: '#' },
        ]}
        renderIcon={() => <img src={'./assets/menu-icon.png'} alt="Logo" />}
      />
    );

    render(<HeaderIcons icons={mockHeaderIcons} />);

    expect(screen.getByText('SHOP.CO')).toBeInTheDocument;
    expect(screen.getByText('Shop')).toBeInTheDocument;

    mockHeaderIcons.forEach((_, index) => {
      const link = screen.getByRole('link', { name: `link-${index}` });
      expect(link).toHaveAttribute('href', '#');
    });

    const user = userEvent.setup();
    render(<HeaderSearch onChange={handleChange} placeholder="Search for products" />);
    const input = screen.getByPlaceholderText('Search for products');

    await user.type(input, 'Camisa');
    expect(handleChange).toHaveBeenCalled();
  });
});
