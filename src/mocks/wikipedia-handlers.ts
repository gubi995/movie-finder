import { rest } from 'msw';

import { WIKIPEDIA_API_URL } from '@/api/constants';

import { MOCK_WIKIPEDIA_RESPONSE } from './responses';

const handlers = [
  rest.get(WIKIPEDIA_API_URL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOCK_WIKIPEDIA_RESPONSE));
  }),
];

export default handlers;
