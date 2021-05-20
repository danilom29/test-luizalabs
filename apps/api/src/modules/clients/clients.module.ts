import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { Client } from './entities/client.entity';
import { CpfClientAlreadyExist } from './validate/cpf-already-exist.constraint';
import { EmailClientAlreadyExist } from './validate/email-already-exist.constraint';

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  controllers: [ClientsController],
  providers: [ClientsService, EmailClientAlreadyExist, CpfClientAlreadyExist],
})
export class ClientsModule {}
