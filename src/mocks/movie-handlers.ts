import { GRAPHQL_API_URL } from '@/api/constants';
import { graphql } from 'msw';

import { MOCK_GRAPHQL_RESPONSE } from './responses';

export const movieGQL = graphql.link(GRAPHQL_API_URL);

const handlers = [
  movieGQL.query('SearchMovies', (req, res, ctx) => {
    return res(ctx.data(MOCK_GRAPHQL_RESPONSE));
  }),
];

export default handlers;
