import { Chip, Skeleton, Typography } from '@mui/material';
import { VFC } from 'react';

import { useMovieDetail } from '@/hooks/useMovieDetail';

import { LinkContainer, LinksLabel, MovieDetailContent, Detail } from './MovieDetail.styles';

interface MovieDetailProps {
  movieTitle: string;
}

const MovieDetail: VFC<MovieDetailProps> = ({ movieTitle }) => {
  const { data, isLoading, error } = useMovieDetail(movieTitle);
  const { movieDetail, links } = data ?? {};
  const { imdb, wikipedia } = links ?? {};

  const movieDescription = isLoading ? (
    <Skeleton variant="rectangular" width={700} height={200} role="progressbar" />
  ) : (
    <Detail>{movieDetail}</Detail>
  );

  const movieLinks = isLoading ? (
    <Skeleton variant="rectangular" width={200} height={20} role="progressbar" />
  ) : (
    <LinkContainer>
      <LinksLabel fontFamily="Montserrat">Links:</LinksLabel>
      {wikipedia && (
        <Chip
          label="Wikipedia"
          component="a"
          href={wikipedia}
          variant="outlined"
          clickable
          target="_blank"
        />
      )}
      {imdb && (
        <Chip label="IMDB" component="a" href={imdb} variant="outlined" clickable target="_blank" />
      )}
    </LinkContainer>
  );

  return (
    <MovieDetailContent>
      <Typography fontFamily="Montserrat" variant="h6">
        {movieTitle}
      </Typography>
      {error ? (
        <Typography variant="subtitle1">{error.message}</Typography>
      ) : (
        <>
          {movieDescription}
          {movieLinks}
        </>
      )}
    </MovieDetailContent>
  );
};

export default MovieDetail;
