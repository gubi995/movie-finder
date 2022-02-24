import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';

import { BACKGROUND } from './styles/linear-gradients';

export const GlobalStyles = () => (
  <Global
    styles={css`
      html {
        background: ${BACKGROUND};
      }

      body {
        margin: 0;
        position: relative;
        min-height: 100vh;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      * {
        font-family: 'Roboto', sans-serif;
      }
    `}
  />
);

export const Main = styled.main`
  max-width: 1000px;
  margin-inline: auto;
  padding: 2rem;
`;
