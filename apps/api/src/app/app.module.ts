import { Module } from '@nestjs/common';
import { ClientsModule } from '../modules/clients/clients.module';
import { DatabaseProvidersModule } from '../providers/database/mysql/database.providers.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DatabaseProvidersModule, ClientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
