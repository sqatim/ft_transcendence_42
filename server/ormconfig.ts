import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'transcendence',
  entities: ['dist/src/**/*.entity.js'],
  synchronize: true,
//   migrations: ['dist/src/transcendence/migrations/*.js'],
//   cli: {
//     migrationsDir: 'src/transcendence/migrations',
//   },
};

export default config;
