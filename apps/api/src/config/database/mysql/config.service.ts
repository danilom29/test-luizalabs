import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const mySqlConfigService: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.TYPEORM_HOST,
  port: +process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  database: process.env.TYPEORM_DATABASE,
  password: process.env.TYPEORM_PASSWORD,
  logging: true,
  entities: [],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};
