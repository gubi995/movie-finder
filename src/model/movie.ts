import { fetchWikipediaPage } from '@/api/wikipedia';

export interface Genre {
  name: string;
}

export interface Movie {
  id: string;
  name: string;
  genres: Genre[];
  score: number;
  overview: string;
  releaseDate: string;
}

export type MovieDetail = Awaited<ReturnType<typeof fetchWikipediaPage>>;
