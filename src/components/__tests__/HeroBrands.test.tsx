import { render, screen } from '@testing-library/react';
import { HeroBrands } from '../HeroBrands';
import { heroBrandsMock } from '../../../__mocks__/HeroBrandsMock';
import '@testing-library/jest-dom';

describe('Should render HeroBrands component', () => {
  it('Should render all image from HeroBrands component', () => {
    render(<HeroBrands brands={heroBrandsMock} />);
    const listaDeBrands = screen.getAllByRole('listitem');

    listaDeBrands.forEach(item => expect(item).toContainHTML('img'));
  });
});
