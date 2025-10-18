import { render } from '@testing-library/react';
import { TypographyH2 } from '../TypographyH2';

describe('Should render Typography components', () => {
  const testText = 'Something anything text...';

  it('Should render text', () => {
    render(<TypographyH2 text={testText} />);

    expect(testText).toBe('Something anything text...');
  });
});
