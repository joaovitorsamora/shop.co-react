import { render, screen } from '@testing-library/react';
import { CarrouselTestimonial } from '..';
import { mockTestimonialsCardFromCarrousel } from '../../../../__mocks__/TestimonialsCardMock';
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

describe('Should render CarrouselTestimonial component', () => {
  it('Should render layout grid with testimonials', () => {
    render(
      <MemoryRouter>
        <CarrouselTestimonial layout="grid" testimonial={mockTestimonialsCardFromCarrousel} />
      </MemoryRouter>
    );

    mockTestimonialsCardFromCarrousel.forEach(testimonial => {
      expect(screen.getByText(testimonial.name)).toBeInTheDocument;
    });
  });

  it('Should render layout carrousel with testimonials', () => {
    render(
      <MemoryRouter>
        <CarrouselTestimonial layout="carrousel" testimonial={mockTestimonialsCardFromCarrousel} />
      </MemoryRouter>
    );

    mockTestimonialsCardFromCarrousel.forEach(testimonial => {
      expect(screen.getByText(testimonial.name)).toBeInTheDocument;
    });
  });
});
