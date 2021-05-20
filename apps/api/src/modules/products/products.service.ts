/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProductCreateDto } from './dto/product-create.dto';
import { Product } from './entities/product.entity';
import { IProduct } from './interface/product.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Not } from 'typeorm';
import { ProductUpdateDto } from './dto/product-update.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {}
  async create(productDto: ProductCreateDto): Promise<{ product: IProduct; message: string }> {
    try {
      const product = await this.productRepository.save(productDto);

      return { product, message: 'Cadastro realizado com sucesso!' };
    } catch (error) {
      throw new HttpException({ message: 'Erro ao cadastrar.' }, HttpStatus.BAD_REQUEST);
    }
  }
  async findByName(name: string, id?: number): Promise<IProduct> {
    try {
      const where: any = {
        name
      };
      if (id) {
        where.id = Not(id);
      }
      const product = await this.productRepository.findOne({
        where,
        select: ['name'],
      });
      return product;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
  async findAll(): Promise<IProduct[]> {
    try {
      const clients = await this.productRepository.find();

      return clients;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
  async findOne(id: number): Promise<IProduct> {
    try {
      const product = await this.productRepository.findOneOrFail(id);

      return product;
    } catch (error) {
      throw new HttpException({ message: 'Cliente não encontrado.' }, HttpStatus.NOT_FOUND);
    }
  }
  async update(productDto: ProductUpdateDto, id: number): Promise<{ product: IProduct; message: string }> {
    try {
      await this.productRepository.findOneOrFail(id);
      const product = await this.productRepository.save({ ...productDto, id });

      return { product, message: 'Atualização realizada com sucesso!' };
    } catch (error) {
      throw new HttpException({ message: 'Erro ao atualizar.' }, HttpStatus.BAD_REQUEST);
    }
  }
  async delete(id: number): Promise<{ message: string }> {
    try {
      await this.productRepository.findOneOrFail(id);
      await this.productRepository.softDelete(id);

      return { message: 'Produto excluído com sucesso.' };
    } catch (error) {
      throw new HttpException({ message: 'Não foi possível excluir o produto.' }, HttpStatus.NOT_FOUND);
    }
  }
}
