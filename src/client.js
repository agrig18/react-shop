import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`GraphQL error --> ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: process.env.REACT_APP_APOLLO_URL,
  }),
]);

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
