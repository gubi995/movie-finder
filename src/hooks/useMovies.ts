import { useQuery } from 'react-query';

import { searchMovies } from '@/api/movies';
import { Movie } from '@/model/movie';

export const useMovies = (title: string) =>
  useQuery<Movie[], Error>(['movie', title], () => {
    if (title) {
      return searchMovies(title);
    }

    return [];
  });
