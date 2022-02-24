import { Backdrop, Fab, Typography } from '@mui/material';
import { Navigation } from '@mui/icons-material';

import { useMovies } from '@/hooks/useMovies';
import MovieCard from '@/components/MovieCard';
import { useSearchStore } from '@/hooks/useSearchStore';

import { Section, StyledCard, StyledCircularProgress, StyledFab } from './MovieList.styles';

export const MovieList = () => {
  const term = useSearchStore((state) => state.term);
  const { data: movies, isLoading } = useMovies(term);
  const isMovieFound = movies && movies.length > 0;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (isLoading) {
    return (
      <Backdrop open>
        <StyledCircularProgress />
      </Backdrop>
    );
  }

  if (!isMovieFound) {
    return (
      <StyledCard>
        <Typography variant="h5" component="p" fontFamily="Montserrat">
          Explore the world of movies!
        </Typography>
        <Typography variant="subtitle1" color="gray" component="p" fontFamily="Montserrat">
          Type something in the search box
        </Typography>
      </StyledCard>
    );
  }

  return (
    <Section>
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      <StyledFab variant="circular" onClick={scrollToTop}>
        <Navigation />
      </StyledFab>
    </Section>
  );
};

export default MovieList;
