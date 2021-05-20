/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Client } from 'apps/api/src/modules/clients/entities/client.entity';

export const mySqlConfigService: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.TYPEORM_HOST,
  port: +process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  database: process.env.TYPEORM_DATABASE,
  password: process.env.TYPEORM_PASSWORD,
  logging: true,
  entities: [Client],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};
