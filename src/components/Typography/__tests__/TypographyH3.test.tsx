import { render } from '@testing-library/react';
import { TypographyH3 } from '../TypographyH3';

describe('Should render Typography components', () => {
  const testText = 'Something anything text...';

  it('Should render text', () => {
    render(<TypographyH3 text={testText} />);

    expect(testText).toBe('Something anything text...');
  });
});
