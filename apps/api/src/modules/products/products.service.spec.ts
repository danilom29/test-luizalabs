import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { IProduct } from './interface/product.interface';
import { HttpException, HttpStatus } from '@nestjs/common';
import { ProductCreateDto } from './dto/product-create.dto';
import { ProductUpdateDto } from './dto/product-update.dto';

describe('ProductsService', () => {
  let service: ProductsService;
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
  const product: IProduct = {
    name: 'Teste',
    origin: 'Importado',
    size: '2m',
    value: 1.1,
    id: 1,
  };
  const clientCreateDto: ProductCreateDto = {
    name: 'Teste',
    origin: 'Importado',
    size: '2m',
    value: 1.1,
  };
  const clientUpdateDto: ProductUpdateDto = {
    name: 'Teste',
    origin: 'Importado',
    size: '2m',
    value: 1.1,
    id: 1,
  };
  const clients: IProduct[] = [product];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(Product),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
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

  it('should return an product', async () => {
    mockRepository.findOneOrFail.mockResolvedValue(product);
    await expect(service.findOne(id)).resolves.toEqual(product);
  });

  it('should return an error when try to find one product', async () => {
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

  it('submitted should be true when create a product', async () => {
    const returnValue = { product, message: 'Cadastro realizado com sucesso!' };
    mockRepository.save.mockResolvedValue(product);
    await expect(service.create(clientCreateDto)).resolves.toEqual(returnValue);
  });

  it('submitted should be error when create product', async () => {
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

  it('submitted should be true when update product', async () => {
    mockRepository.findOneOrFail.mockResolvedValue(product);
    mockRepository.save.mockResolvedValue(product);
    await expect(service.update(clientUpdateDto, id)).resolves.toEqual({
      product,
      message: 'Atualização realizada com sucesso!',
    });
  });

  it('submitted should be error when update product', async () => {
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

  it('submitted should be true when delete product', async () => {
    const returnMessage = { message: 'Produto excluído com sucesso.' };
    mockRepository.findOneOrFail.mockResolvedValue(product);
    mockRepository.softDelete.mockResolvedValue(product);
    await expect(service.delete(id)).resolves.toEqual(returnMessage);
  });

  it('should return an message error when product to be deleted does not exist', async () => {
    mockRepository.findOne.mockResolvedValue(null);
    mockRepository.findOneOrFail.mockRejectedValue(
      new HttpException('Não foi possível excluir o produto.', HttpStatus.BAD_GATEWAY)
    );
    await expect(service.delete(id)).rejects.toThrow('Não foi possível excluir o produto.');
  });
});
