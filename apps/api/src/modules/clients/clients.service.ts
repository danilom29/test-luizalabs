/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ClientCreateDto } from './dto/client-create.dto';
import { Client } from './entities/client.entity';
import { IClient } from './interface/client.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Not } from 'typeorm';
import { ClientUpdateDto } from './dto/client-update.dto';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>
  ) {}
  async create(clientDto: ClientCreateDto): Promise<{ client: IClient; message: string }> {
    try {
      const client = await this.clientRepository.save(clientDto);

      return { client, message: 'Cadastro realizado com sucesso!' };
    } catch (error) {
      throw new HttpException({ message: 'Erro ao cadastrar.' }, HttpStatus.BAD_REQUEST);
    }
  }
  async findByEmail(email: string, id?:number): Promise<IClient> {
    try {
      const where: any = {
        email
      }
      if (id) {
        where.id = Not(id);
      }
      const client = await this.clientRepository.findOne({
        where,
        select: ['email'],
      });
      return client;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
  async findByCpf(cpf: number, id?:number): Promise<IClient> {
    try {
      const where: any = {
        cpf
      }
      if (id) {
        where.id = Not(id);
      }
      const client = await this.clientRepository.findOne({
        where,
        select: ['cpf'],
      });
      return client;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
  async findAll(): Promise<IClient[]> {
    try {
      const clients = await this.clientRepository.find();

      return clients;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
  async findOne(id: number): Promise<IClient> {
    try {
      const client = await this.clientRepository.findOneOrFail(id);

      return client;
    } catch (error) {
      throw new HttpException({ message: 'Cliente não encontrado.' }, HttpStatus.NOT_FOUND);
    }
  }
  async update(clientDto: ClientUpdateDto, id: number): Promise<{ client: IClient; message: string }> {
    try {
      await this.clientRepository.findOneOrFail(id);
      const client = await this.clientRepository.save({ ...clientDto, id });

      return { client, message: 'Atualização realizada com sucesso!' };
    } catch (error) {
      throw new HttpException({ message: 'Erro ao atualizar.' }, HttpStatus.BAD_REQUEST);
    }
  }
  async delete(id: number): Promise<{ message: string }> {
    try {
      await this.clientRepository.findOneOrFail(id);
      await this.clientRepository.softDelete(id);

      return { message: 'Cliente excluído com sucesso.' };
    } catch (error) {
      throw new HttpException({ message: 'Não foi possível excluir o cliente.' }, HttpStatus.NOT_FOUND);
    }
  }
}
