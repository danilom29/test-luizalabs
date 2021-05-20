/* eslint-disable @typescript-eslint/no-unsafe-return */
import { IProduct } from './../../../../api/src/modules/products/interface/product.interface';
import { DefaultCrudService } from '../../shared/services/defaultCrud/default-crud.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private crudService: DefaultCrudService) {}

  async create(product: IProduct): Promise<any> {
    return await this.crudService.httpPost('produtos', product);
  }

  async update(product: IProduct, id: number): Promise<any> {
    return await this.crudService.httpPut(`produtos/${id}`, product);
  }

  async getOne(id: number): Promise<IProduct> {
    return await this.crudService.httpGet(`produtos/${id}`);
  }

  async getAll(): Promise<IProduct[]> {
    return await this.crudService.httpGet('produtos');
  }

  async delete(id: number): Promise<{ message: string }> {
    return await this.crudService.httpDelete(`produtos/${id}`);
  }
}
