import { useQuery } from 'react-query';

import { MovieDetail } from '@/model/movie';
import { fetchWikipediaPage } from '@/api/wikipedia';

export const useMovieDetail = (title: string) =>
  useQuery<MovieDetail, Error>(['movieDetail', title], () => fetchWikipediaPage(title), {
    refetchOnWindowFocus: false,
  });
