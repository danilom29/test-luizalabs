import { Test, TestingModule } from '@nestjs/testing';
import { ClientsService } from './clients.service';
import { Client } from './entities/client.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { IClient } from './interface/client.interface';
import { HttpException, HttpStatus } from '@nestjs/common';
import { ClientCreateDto } from './dto/client-create.dto';
import { ClientUpdateDto } from './dto/client-update.dto';

describe('ClientsService', () => {
  let service: ClientsService;
  const id = 1;
  const mockRepository = {
    findAll: jest.fn(),
    find: jest.fn(),
    save: jest.fn(),
    create: jest.fn(),
    findOneOrFail: jest.fn(),
    findOne: jest.fn(),
    delete: jest.fn(),
    softDelete: jest.fn(),
  };
  const client: IClient = {
    cpf: '123445566',
    email: 'teste@email.com',
    gender: 'Masculino',
    name: 'Teste',
    id: 1,
  };
  const clientCreateDto: ClientCreateDto = {
    cpf: '123445566',
    email: 'teste@email.com',
    gender: 'Masculino',
    name: 'Teste',
  };
  const clientUpdateDto: ClientUpdateDto = {
    cpf: '123445566',
    email: 'teste@email.com',
    gender: 'Masculino',
    name: 'Teste',
    id: 1,
  };
  const clients: IClient[] = [client];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientsService,
        {
          provide: getRepositoryToken(Client),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<ClientsService>(ClientsService);
  });

  it('should return an array of clients', async () => {
    mockRepository.find.mockResolvedValue(clients);
    expect(await service.findAll()).toBe(clients);
  });

  it('should return error when try to find all clients', async () => {
    mockRepository.find.mockRejectedValue(
      new HttpException(
        {
          message: 'erro',
        },
        HttpStatus.BAD_GATEWAY
      )
    );
    await expect(service.findAll()).rejects.toThrow('erro');
  });

  it('should return an client', async () => {
    mockRepository.findOneOrFail.mockResolvedValue(client);
    await expect(service.findOne(id)).resolves.toEqual(client);
  });

  it('should return an error when try to find one client', async () => {
    mockRepository.findOneOrFail.mockRejectedValue(
      new HttpException(
        {
          message: 'Cliente não encontrado.',
        },
        HttpStatus.BAD_GATEWAY
      )
    );
    await expect(service.findOne(id)).rejects.toThrow('Cliente não encontrado.');
  });

  it('submitted should be true when create a client', async () => {
    const returnValue = { client, message: 'Cadastro realizado com sucesso!' };
    mockRepository.save.mockResolvedValue(client);
    await expect(service.create(clientCreateDto)).resolves.toEqual(returnValue);
  });

  it('submitted should be error when create client', async () => {
    mockRepository.save.mockRejectedValue(
      new HttpException(
        {
          message: 'Erro ao cadastrar.',
        },
        HttpStatus.BAD_GATEWAY
      )
    );
    await expect(service.create(clientCreateDto)).rejects.toThrow('Erro ao cadastrar.');
  });

  it('submitted should be true when update client', async () => {
    mockRepository.findOneOrFail.mockResolvedValue(client);
    mockRepository.save.mockResolvedValue(client);
    await expect(service.update(clientUpdateDto, id)).resolves.toEqual({
      client,
      message: 'Atualização realizada com sucesso!',
    });
  });

  it('submitted should be error when update client', async () => {
    mockRepository.save.mockRejectedValue(
      new HttpException(
        {
          message: 'Erro ao atualizar.',
        },
        HttpStatus.BAD_GATEWAY
      )
    );
    await expect(service.update(clientUpdateDto, id)).rejects.toThrow('Erro ao atualizar.');
  });

  it('submitted should be true when delete client', async () => {
    const returnMessage = { message: 'Cliente excluído com sucesso.' };
    mockRepository.findOneOrFail.mockResolvedValue(client);
    mockRepository.softDelete.mockResolvedValue(client);
    await expect(service.delete(id)).resolves.toEqual(returnMessage);
  });

  it('should return an message error when client to be deleted does not exist', async () => {
    mockRepository.findOne.mockResolvedValue(null);
    mockRepository.findOneOrFail.mockRejectedValue(
      new HttpException('Não foi possível excluir o cliente.', HttpStatus.BAD_GATEWAY)
    );
    await expect(service.delete(id)).rejects.toThrow('Não foi possível excluir o cliente.');
  });
});
