import { Module } from '@nestjs/common';
import { ClientsModule } from '../modules/clients/clients.module';
import { ProductsModule } from '../modules/products/products.module';
import { DatabaseProvidersModule } from '../providers/database/mysql/database.providers.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DatabaseProvidersModule, ClientsModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
