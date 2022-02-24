import { request, gql } from 'graphql-request';
import { GRAPHQL_API_URL } from './constants';

const searchMovieQuery = gql`
  query SearchMovies($title: String!) {
    searchMovies(query: $title) {
      id
      name
      genres {
        name
      }
      score
      overview
      releaseDate
    }
  }
`;

export const searchMovies = async (title: string) => {
  const { searchMovies } = await request(GRAPHQL_API_URL, searchMovieQuery, { title });

  return searchMovies;
};
