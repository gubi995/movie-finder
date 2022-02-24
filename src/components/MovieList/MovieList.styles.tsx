import styled from '@emotion/styled';
import { Card, CircularProgress, Fab } from '@mui/material';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const StyledCircularProgress = styled(CircularProgress)`
  color: white;
`;

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  height: 60vh;
  gap: 1rem;
  padding: 1rem;
  text-align: center;
`;

export const StyledFab = styled(Fab)`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 2rem 4rem;
`;
