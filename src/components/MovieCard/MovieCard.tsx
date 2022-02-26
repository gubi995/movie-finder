import { VFC } from 'react';
import { Typography, Chip, ButtonBase } from '@mui/material';

import { useStore } from '@/hooks/useStore';
import MovieDetail from '@/components/MovieDetail';
import { Movie } from '@/model/movie';

import {
  ChipContainer,
  Score,
  StyledCard,
  StyledCardContent,
  TitleAndDateContainer,
  TopSection,
} from './MovieCard.styles';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: VFC<MovieCardProps> = ({
  movie: { name, genres, overview, releaseDate, score },
}) => {
  const setContent = useStore((state) => state.setContent);

  const openDetails = () => {
    setContent(<MovieDetail movieTitle={name} />);
  };

  return (
    <StyledCard>
      <StyledCardContent>
        <TopSection>
          <TitleAndDateContainer>
            <ButtonBase disableRipple onClick={openDetails}>
              <Typography fontFamily="Montserrat" variant="h5">
                {name}
              </Typography>
            </ButtonBase>
            <Typography color="gray">{new Date(releaseDate).toLocaleDateString()}</Typography>
          </TitleAndDateContainer>
          <Score>{score}</Score>
        </TopSection>
        <ChipContainer>
          {genres.map(({ name }) => (
            <Chip key={name} label={name} />
          ))}
        </ChipContainer>
        <Typography>{overview}</Typography>
      </StyledCardContent>
    </StyledCard>
  );
};

export default MovieCard;
