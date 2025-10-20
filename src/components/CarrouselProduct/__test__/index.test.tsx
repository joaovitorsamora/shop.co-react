import { screen, render } from '@testing-library/react';
import { CarrouselProduct } from '..';
import { mockProductsFromCarrousel } from '../../../../__mocks__/ProductCardMock';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

jest.mock('../../ui/carousel', () => ({
  __esModule: true,
  Carousel: ({ children }: any) => <div data-testid="mock-carousel">{children}</div>,
  CarouselContent: ({ children }: any) => <div>{children}</div>,
  CarouselItem: ({ children }: any) => <div key={1}>{children}</div>,
  CarouselNext: () => <div>Next</div>,
  CarouselPrevious: () => <div>Prev</div>,
}));

describe('Should render CarrouselProduct component', () => {
  it('Should render layout grid with products', () => {
    render(
      <MemoryRouter>
        <CarrouselProduct layout="grid" products={mockProductsFromCarrousel} />
      </MemoryRouter>
    );

    mockProductsFromCarrousel.forEach(product => {
      expect(screen.getByText(product.title)).toBeInTheDocument;
    });
  });

  it('Should render layout carrousel with products', () => {
    render(
      <MemoryRouter>
        <CarrouselProduct layout="carrousel" products={mockProductsFromCarrousel} />
      </MemoryRouter>
    );

    mockProductsFromCarrousel.forEach(product => {
      expect(screen.getByText(product.title)).toBeInTheDocument;
    });

    expect(screen.getByTestId('mock-carousel')).toBeInTheDocument;
  });
});
