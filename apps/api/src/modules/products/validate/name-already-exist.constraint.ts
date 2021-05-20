/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { ProductsService } from '../products.service';
import { IProduct } from '../interface/product.interface';
let service: ProductsService;
@ValidatorConstraint({ name: 'NameProductAlreadyExist', async: true })
export class NameProductAlreadyExist implements ValidatorConstraintInterface, OnModuleInit {
  constructor(private moduleRef: ModuleRef) {}
  onModuleInit(): void {
    service = this.moduleRef.get(ProductsService);
  }
  async validate(name: string, validationArguments: ValidationArguments): Promise<boolean> {
    const product: IProduct = Object.assign(validationArguments.object);
    const entity = await service.findByName(name, product.id);
    return !entity;
  }
}
