import '@testing-library/jest-dom';
import { setLogger } from 'react-query';

// React Query
setLogger({
  log: console.log,
  warn: console.warn,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  error: () => {},
});
