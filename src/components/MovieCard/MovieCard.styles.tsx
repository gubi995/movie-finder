import styled from '@emotion/styled';
import { Card, CardContent } from '@mui/material';

import { BACKGROUND } from '@/styles/linear-gradients';

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const TitleAndDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Score = styled.div`
  display: grid;
  place-items: center;
  padding: 0.5em;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-weight: bold;
  background: ${BACKGROUND};
  color: white;
`;

export const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  flex: 1 1;
`;

export const ChipContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
