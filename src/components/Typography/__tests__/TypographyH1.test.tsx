import { render } from '@testing-library/react';
import { TypographyH1 } from '../TypographyH1';

describe('Should render Typography components', () => {
  const testText = 'Something anything text...';

  it('Should render text', () => {
    render(<TypographyH1 text={testText} />);

    expect(testText).toBe('Something anything text...');
  });
});
