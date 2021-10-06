import { ApolloServer } from 'apollo-server';

import Knex from 'knex';
import { PoolQuery, Query } from './queries';
import { typeDefs } from './schema';

export type Workflows = {};

export const appoloFactory = (workflows: Workflows, knex: Knex) => {
  const resolvers = {
    Query: Query(knex),
    Pool: PoolQuery(knex),
  };

  return new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {},
  });
};
