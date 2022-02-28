import { setupServer } from 'msw/node';
import userEvent from '@testing-library/user-event';

import {
  screen,
  render,
  cleanup,
  waitForElementToBeRemoved,
  queryClient,
} from '@/utils/custom-render';
import movieHandlers, { movieGQL } from '@/mocks/movie-handlers';
import { MOCK_GRAPHQL_RESPONSE } from '@/mocks/responses';
import * as hooks from '@/hooks/useStore';

import MovieList from './MovieList';

const searchTermMock = 'Fight Club';

jest.spyOn(hooks, 'useStore').mockReturnValue(searchTermMock);

describe('MovieList component', () => {
  const server = setupServer(...movieHandlers);

  beforeAll(() => server.listen());

  beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  afterEach(() => {
    queryClient.clear();
    server.resetHandlers();
  });

  afterAll(() => server.close());

  test('should be in loading state initially', async () => {
    server.use(
      movieGQL.query('SearchMovies', (req, res, ctx) => {
        return res(ctx.data({ searchMovies: [] }));
      })
    );

    render(<MovieList />);

    const progressbar = screen.getByTestId('loading');

    expect(progressbar).toBeInTheDocument();
  });

  test('should show the "Explore" text if no movies found', async () => {
    server.use(
      movieGQL.query('SearchMovies', (req, res, ctx) => {
        return res(ctx.data({ searchMovies: [] }));
      })
    );

    render(<MovieList />);

    const exploreText = await screen.findByText(/explore/i);

    expect(exploreText).toBeInTheDocument();
  });

  test('should show movies as the result of the search', async () => {
    const movieTitles = MOCK_GRAPHQL_RESPONSE.searchMovies.map(({ name }) => name);

    render(<MovieList />);

    const progressbar = screen.getByTestId('loading');

    await waitForElementToBeRemoved(progressbar);

    movieTitles.forEach((title) => expect(screen.getByText(title)).toBeInTheDocument());
  });

  test('should scroll to top clicking on the arrow icon', async () => {
    window.scrollTo = jest.fn();

    render(<MovieList />);

    const scrollToTopButton = await screen.findByTestId('scroll-to-top-button');

    userEvent.click(scrollToTopButton);

    expect(window.scrollTo).toHaveBeenCalledTimes(1);
  });
});
