import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ClientCreateDto } from './dto/client-create.dto';
import { Client } from './entities/client.entity';
import { IClient } from './interface/client.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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
}
