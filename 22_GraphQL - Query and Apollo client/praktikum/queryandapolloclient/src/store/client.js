import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://apparent-urchin-65.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "frdyfvGuC1xYndvdsntBdFSM7PsaDPi9iC6WbhTbMXT9vLT0b2Jp4bBkpKBbmYni",
  },
  cache: new InMemoryCache(),
});

export default client;
