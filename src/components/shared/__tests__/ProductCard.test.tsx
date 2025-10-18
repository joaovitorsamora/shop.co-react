import { render, screen } from '@testing-library/react';
import { ProductCard } from '../ProductCard';
import { mockProducts } from '../../../../__mocks__/ProductCardMock';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('ProductCard', () => {
  it('Should render ProductCard component', () => {
    render(
      <MemoryRouter>
        <ProductCard products={mockProducts} />
      </MemoryRouter>
    );

    expect(screen.getByAltText('Produto Teste')).toHaveAttribute('src', 'fake-image.png');
    expect(screen.getByText('Produto Teste')).toBeInTheDocument;
    expect(screen.getByText('99.99', { exact: false })).toBeInTheDocument;
    expect(screen.getByText('129.99', { exact: false })).toBeInTheDocument;
    expect(screen.getByText('20%', { exact: false })).toBeInTheDocument;
    expect(screen.getByText('10/5')).toBeInTheDocument;
    expect(screen.getByRole('img', { name: /Avaliação: 10 de 5 estrelas/i })).toBeInTheDocument;
  });
});
