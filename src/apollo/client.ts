import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {API_URL} from '../constants';

export const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

export {ApolloProvider};
