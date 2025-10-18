import { render, screen } from '@testing-library/react';
import { TestimonialsCard } from '../TestimonialsCard';
import { mockTestimonialsCard } from '../../../../__mocks__/TestimonialsCardMock';

describe('Should render TestimonialsCard component', () => {
  it('Should pass all props from TestimonialsCard component', () => {
    render(<TestimonialsCard card={mockTestimonialsCard} />);

    expect(screen.getByText('Fake name')).toBeInTheDocument;
    expect(screen.getByText('Fake quote...', { exact: false })).toBeInTheDocument;
    expect(screen.getByRole('img', { name: /Stars review/i })).toBeInTheDocument;
    expect(screen.getByRole('img', { name: /verification icon/i })).toBeInTheDocument;
  });
});
