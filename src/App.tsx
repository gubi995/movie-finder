import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Header from '@/components/Header';
import MovieList from '@/components/MovieList';
import Modal from '@/components/Modal';

import { GlobalStyles, Main } from './App.styles';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <GlobalStyles />
    <Header />
    <Main>
      <MovieList />
    </Main>
    <Modal />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default App;
