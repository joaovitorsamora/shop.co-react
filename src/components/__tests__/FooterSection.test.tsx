import { render, screen } from '@testing-library/react';
import { FooterSection } from '../FooterSection';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Should render FooterSection component', () => {
  it('Should render all text from FooterSection', () => {
    render(
      <MemoryRouter>
        <FooterSection />
      </MemoryRouter>
    );

    expect(screen.getByText('SHOP.CO')).toBeInTheDocument;
    expect(
      screen.getByText(
        'We have clothes that suits your style and which you’re proud to wear. From women to men.'
      )
    ).toBeInTheDocument;
    expect(screen.getByText('COMPANY')).toBeInTheDocument;
    expect(screen.getByText('F.A.Q')).toBeInTheDocument;
    expect(screen.getByText('HELP')).toBeInTheDocument;
    expect(screen.getByText('RESOURCES')).toBeInTheDocument;
    expect(screen.getByText('© 2025, All rights reserved')).toBeInTheDocument;
  });

  it('Should render the correct URLs', () => {
    render(
      <MemoryRouter>
        <FooterSection />
      </MemoryRouter>
    );
    expect(screen.getByRole('link', { name: /twitter/i })).toHaveAttribute('href', 'https://x.com');
    expect(screen.getByRole('link', { name: /facebook/i })).toHaveAttribute(
      'href',
      'https://www.facebook.com/?locale=pt_BR'
    );
    expect(screen.getByRole('link', { name: /instagram/i })).toHaveAttribute(
      'href',
      'https://www.instagram.com'
    );
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute(
      'href',
      'https://github.com'
    );
  });
});
