import dotenv from 'dotenv';
import knex from 'knex';
import { knexSnakeCaseMappers } from '../../libs/knex-toolbox/snakecase';
import { appoloFactory } from '../../apps/client/infra/appolo/index';

dotenv.config();

const main = async () => {
  const connectionString = process.env.MAIN_DB_CONNECTION_STRING;
  if (!connectionString) {
    throw new Error("Env variable 'MAIN_DB_CONNECTION_STRING' is required");
  }

  // . DB
  const pg = knex({
    client: 'pg',
    debug: true,
    connection: {
      connectionString,
      ssl: Boolean(process.env.DB_SSL) ?? true,
    },
    searchPath: ['knex', 'public'],
    // ...knexSnakeCaseMappers(),
  });

  const appoloServer = appoloFactory({}, pg);

  appoloServer.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

main();
