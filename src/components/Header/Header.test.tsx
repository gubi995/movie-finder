import { render } from '@/utils/custom-render';

import Header from './Header';

describe('Header component', () => {
  test('should render movie data', () => {
    const { baseElement } = render(<Header />);

    expect(baseElement).toMatchSnapshot();
  });
});
