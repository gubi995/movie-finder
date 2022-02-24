import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Header from '@/components/Header';
import MovieList from '@/components/MovieList';

import { GlobalStyles, Main } from './App.styles';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <GlobalStyles />
    <Header />
    <Main>
      <MovieList />
    </Main>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default App;
