import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Header from '@/components/Header';

import { GlobalStyles } from './App.styles';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <GlobalStyles />
    <Header />
    <main
      style={{ background: 'linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)', height: '100vh' }}
    >
      <section>List</section>
    </main>
    <footer>jump</footer>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default App;
