import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { render, cleanup, queryClient, screen } from '@/utils/custom-render';
import wikipediaHandlers from '@/mocks/wikipedia-handlers';
import { MOCK_WIKIPEDIA_RESPONSE } from '@/mocks/responses';
import { WIKIPEDIA_API_URL, WIKIPEDIA_URL } from '@/api/constants';

import MovieDetail from './MovieDetail';

const movieTitle = 'Fight Club';

describe('MovieDetail component', () => {
  const server = setupServer(...wikipediaHandlers);

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

  test('should be in loading state initially', () => {
    render(<MovieDetail movieTitle={movieTitle} />);

    const skeletons = screen.getAllByRole('progressbar');

    expect(skeletons.length).toBe(2);
  });

  test('should render movie data response', async () => {
    const [firstPage] = Object.values(MOCK_WIKIPEDIA_RESPONSE.query.pages);
    const [expectedImdbLink] = Object.values(firstPage.extlinks[0]);

    render(<MovieDetail movieTitle={movieTitle} />);

    const title = await screen.findByText(movieTitle);
    const movieExtract = await screen.findByText(
      /Fight Club is a 1999 American film directed by David Fincher/i
    );
    const wikipedia = await screen.findByText(/wikipedia/i);
    const imdb = await screen.findByText(/imdb/i);
    const [wikipediaLink, imdbLink] = await screen.getAllByRole<HTMLLinkElement>('link');

    expect(title).toBeInTheDocument();
    expect(movieExtract).toBeInTheDocument();
    expect(wikipedia).toBeInTheDocument();
    expect(imdb).toBeInTheDocument();
    expect(wikipediaLink.href).toBe(`${WIKIPEDIA_URL}/${encodeURIComponent(movieTitle)}`);
    expect(imdbLink.href).toBe(expectedImdbLink);
  });

  test('should show error if the request failed', async () => {
    const detailNotFoundResponse = {
      query: {
        pages: {
          '-1': {},
        },
      },
    };

    server.use(
      rest.get(WIKIPEDIA_API_URL, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(detailNotFoundResponse));
      })
    );

    render(<MovieDetail movieTitle={movieTitle} />);

    const error = await screen.findByText("We couldn't find any Wikipedia page");

    expect(error).toBeInTheDocument();
  });
});
