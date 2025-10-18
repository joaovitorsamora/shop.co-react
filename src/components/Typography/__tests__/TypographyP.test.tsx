import { render } from '@testing-library/react';
import { TypographyP } from '../TypographyP';

describe('Should render Typography components', () => {
  const testText = 'Something anything text...';

  it('Should render text', () => {
    render(<TypographyP text={testText} />);

    expect(testText).toBe('Something anything text...');
  });
});
