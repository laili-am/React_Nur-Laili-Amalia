import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const httpLink = new ApolloClient({
  uri: "https://apparent-urchin-65.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "frdyfvGuC1xYndvdsntBdFSM7PsaDPi9iC6WbhTbMXT9vLT0b2Jp4bBkpKBbmYni",
  },
  cache: new InMemoryCache(),
});
const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://apparent-urchin-65.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "frdyfvGuC1xYndvdsntBdFSM7PsaDPi9iC6WbhTbMXT9vLT0b2Jp4bBkpKBbmYni",
      },
    },
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
