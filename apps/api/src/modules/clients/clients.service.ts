/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ClientCreateDto } from './dto/client-create.dto';
import { Client } from './entities/client.entity';
import { IClient } from './interface/client.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Not } from 'typeorm';

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
}
