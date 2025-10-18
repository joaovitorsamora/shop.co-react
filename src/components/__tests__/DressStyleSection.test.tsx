import { render, screen } from '@testing-library/react';
import { DressStyleSection } from '../DressStyleSection';
import { mockClothesStyles } from '../../../__mocks__/DressStyleMock';
import '@testing-library/jest-dom';

describe('Should render DressStyleSection component', () => {
  it('Should render title and Alt text', () => {
    render(<DressStyleSection clothesStyles={mockClothesStyles} title="BROWSE BY dress STYLE" />);

    expect(screen.getByText(/BROWSE BY dress STYLE/i)).toBeInTheDocument;
    expect(screen.getAllByAltText(/Homem usando roupa casual/i)[0]).toHaveAttribute(
      'src',
      './assets/casual.png'
    );
    expect(screen.getAllByAltText(/Homem usando roupa casual/i)[1]).toHaveAttribute(
      'src',
      './assets/casual-desktop.png'
    );
    expect(screen.getAllByAltText(/Homem usando roupa formal/i)[0]).toHaveAttribute(
      'src',
      './assets/formal.png'
    );
    expect(screen.getAllByAltText(/Homem usando roupa formal/i)[1]).toHaveAttribute(
      'src',
      './assets/formal-desktop.png'
    );
    expect(screen.getAllByAltText(/Homem usando roupa para academia/i)[0]).toHaveAttribute(
      'src',
      './assets/gym.png'
    );
    expect(screen.getAllByAltText(/Homem usando roupa para academia/i)[1]).toHaveAttribute(
      'src',
      './assets/gym-desktop.png'
    );
    expect(screen.getAllByAltText(/Mulher usando roupa para festa/i)[0]).toHaveAttribute(
      'src',
      './assets/party.png'
    );
    expect(screen.getAllByAltText(/Mulher usando roupa para festa/i)[1]).toHaveAttribute(
      'src',
      './assets/party-desktop.png'
    );
  });
});
