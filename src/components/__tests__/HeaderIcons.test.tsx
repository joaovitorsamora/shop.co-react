import { render, screen } from '@testing-library/react';
import { HeaderIcons } from '../HeaderIcons';
import { mockHeaderIcons } from '../../../__mocks__/HeaderIconsMock';
import '@testing-library/jest-dom';
describe('Should render HeaderIcons component', () => {
  it('Should render all icons from icons props', () => {
    render(<HeaderIcons icons={mockHeaderIcons} />);

    mockHeaderIcons.forEach((_, index) => {
      const link = screen.getByRole('link', { name: `link-${index}` });
      expect(link).toHaveAttribute('href', '#');
    });
  });
});
