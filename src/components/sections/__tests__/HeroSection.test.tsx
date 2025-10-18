import { render, screen } from '@testing-library/react';
import { HeroStatsItem } from '../../HeroStatsItem';
import { HeroBrands } from '../../HeroBrands';
import { HeroSection } from '../HeroSection';
import { brands, stats } from '../../../../__mocks__/HeroSectionMock';

const mockHeroStatsItem = jest.fn();
jest.mock('../../HeroStatsItem', () => ({
  HeroStatsItem: (props: any) => {
    mockHeroStatsItem(props);
    return;
  },
}));

const mockHeroBrands = jest.fn();
jest.mock('../../HeroBrands', () => ({
  HeroBrands: (props: any) => {
    mockHeroBrands(props);
    return;
  },
}));

describe('HeroSection', () => {
  it('render props of title and description', () => {
    render(
      <HeroSection
        titleText="FIND CLOTHES THAT MATCHES YOUR STYLE"
        descriptionText="Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style."
        stats={stats}
        brands={brands}
      />
    );
    expect(screen.getByText('FIND CLOTHES THAT MATCHES YOUR STYLE')).toBeInTheDocument;
    expect(
      screen.getByText(
        'Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.'
      )
    ).toBeInTheDocument;
    expect(screen.getByText('Shop Now')).toBeInTheDocument;
    expect(mockHeroStatsItem).toHaveBeenCalledWith({ statsItem: stats });
    expect(mockHeroBrands).toHaveBeenCalledWith({ brands });
  });
});
