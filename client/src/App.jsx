import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Outlet } from 'react-router-dom';
// import 'dotenv/config';

import '../src/assets/skeleton/normalize.css';
import '../src/assets/skeleton/skeleton.css';
import FooterNav from './components/footerNav/FooterNav';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <div>
          <Outlet />
        </div>
        <FooterNav />
      </div>
      </ApolloProvider>
    
  );
}

export default App;
