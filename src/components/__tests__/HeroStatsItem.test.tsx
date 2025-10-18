import { render, screen } from '@testing-library/react';
import { HeroStatsItem } from '../HeroStatsItem';
import { heroStatsItemmock } from '../../../__mocks__/HeroStatsItemMock';
import '@testing-library/jest-dom';
describe('Should render HeroStatsItem component', () => {
  it('Should render listitem', () => {
    render(<HeroStatsItem statsItem={heroStatsItemmock} />);

    heroStatsItemmock.forEach(stats =>
      stats.isDivider === true
        ? expect(screen.getAllByTestId('lista-disable')).not.toBeInTheDocument
        : expect(screen.getAllByTestId('lista-disable')).toBeInTheDocument
    );
  });
});
