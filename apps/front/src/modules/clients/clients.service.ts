/* eslint-disable @typescript-eslint/no-unsafe-return */
import { IClient } from './../../../../api/src/modules/clients/interface/client.interface';
import { DefaultCrudService } from '../../shared/services/defaultCrud/default-crud.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  constructor(private crudService: DefaultCrudService) {}

  async create(client: IClient): Promise<any> {
    return await this.crudService.httpPost('clientes', client);
  }

  async update(client: IClient, id: number): Promise<any> {
    return await this.crudService.httpPut(`clientes/${id}`, client);
  }

  async getOne(id: number): Promise<IClient> {
    return await this.crudService.httpGet(`clientes/${id}`);
  }

  async getAll(): Promise<IClient[]> {
    return await this.crudService.httpGet('clientes');
  }

  async delete(id: number): Promise<{ message: string }> {
    return await this.crudService.httpDelete(`clientes/${id}`);
  }
}
