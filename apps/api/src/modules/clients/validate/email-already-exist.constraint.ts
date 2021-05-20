/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { ClientsService } from '../clients.service';
import { IClient } from '../interface/client.interface';
let service: ClientsService;
@ValidatorConstraint({ name: 'EmailClientAlreadyExist', async: true })
export class EmailClientAlreadyExist implements ValidatorConstraintInterface, OnModuleInit {
  constructor(private moduleRef: ModuleRef) {}
  onModuleInit(): void {
    service = this.moduleRef.get(ClientsService);
  }
  async validate(email: string, validationArguments: ValidationArguments): Promise<boolean> {
    const client: IClient = Object.assign(validationArguments.object);
    const entity = await service.findByEmail(email, client.id);
    return !entity;
  }
}
