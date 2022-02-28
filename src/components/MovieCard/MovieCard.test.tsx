import userEvent from '@testing-library/user-event';

import { screen, render } from '@/utils/custom-render';
import { MOCK_GRAPHQL_RESPONSE } from '@/mocks/responses';
import * as hooks from '@/hooks/useStore';
import MovieDetail from '@/components/MovieDetail';

import MovieCard from './MovieCard';

const setModalContentMock = jest.fn();
const [movie] = MOCK_GRAPHQL_RESPONSE.searchMovies;

jest.spyOn(hooks, 'useStore').mockReturnValue(setModalContentMock);

describe('MovieCard component', () => {
  test('should render movie data', () => {
    const { baseElement } = render(<MovieCard movie={movie} />);

    expect(baseElement).toMatchSnapshot();
  });

  test('should open modal with the proper content', () => {
    render(<MovieCard movie={movie} />);

    const movieTitleButton = screen.getByRole('button');

    userEvent.click(movieTitleButton);

    expect(setModalContentMock).toHaveBeenCalledTimes(1);
    expect(setModalContentMock).toHaveBeenCalledWith(<MovieDetail movieTitle={movie.name} />);
  });
});
