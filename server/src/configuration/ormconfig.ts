import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {

  type: 'postgres',
  database: 'transcendence',
  entities: ['dist/core/**/*.entity.js'],
  synchronize: true,
};

export default config;
