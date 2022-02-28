import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const MovieDetailContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const LinksLabel = styled(Typography)`
  text-transform: uppercase;
  font-size: 0.8em;
`;

export const Detail = styled(Typography)`
  overflow: auto;
`;
