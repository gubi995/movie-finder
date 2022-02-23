import { Global, css } from '@emotion/react';

export const GlobalStyles = () => (
  <Global
    styles={css`
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
