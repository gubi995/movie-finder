import axios, { AxiosResponse } from 'axios';

import { WIKIPEDIA_API_URL, WIKIPEDIA_QUERY_PARAMS, WIKIPEDIA_URL } from './constants';

interface WikiPageValue {
  extlinks?: Record<string, string>[];
  extract?: string;
}

interface WikipediaResponse {
  query: {
    pages: Record<string, WikiPageValue>;
  };
}

export const fetchWikipediaPage = async (title: string) => {
  const encodedTitle = encodeURIComponent(title);
  const response: AxiosResponse<WikipediaResponse> = await axios(
    `${WIKIPEDIA_API_URL}${WIKIPEDIA_QUERY_PARAMS}&titles=${encodedTitle}`
  );
  const pages = response.data.query.pages;
  const isPageNotFound = Boolean(pages['-1']);

  if (isPageNotFound) {
    throw new Error("We couldn't find any Wikipedia page");
  }

  const [firstPage] = Object.values(pages);
  const movieDetail = firstPage?.extract;
  const imdbLinkObject = firstPage?.extlinks?.find((link) => link['*'].includes('imdb')) ?? {};
  const [imdbLink] = Object.values(imdbLinkObject);
  const wikipediaLink = `${WIKIPEDIA_URL}/${encodedTitle}`;

  return {
    movieDetail,
    links: {
      imdb: imdbLink,
      wikipedia: wikipediaLink,
    },
  };
};
