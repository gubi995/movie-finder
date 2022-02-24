import { VFC } from 'react';

import { Typography, Chip } from '@mui/material';

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
  return (
    <StyledCard>
      <StyledCardContent>
        <TopSection>
          <TitleAndDateContainer>
            <Typography fontFamily="Montserrat" variant="h5">
              {name}
            </Typography>
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
