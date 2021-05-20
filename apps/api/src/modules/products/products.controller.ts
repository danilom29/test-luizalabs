import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductCreateDto } from './dto/product-create.dto';
import { ProductUpdateDto } from './dto/product-update.dto';
import { IProduct } from './interface/product.interface';

@Controller('produtos')
export class ProductsController {
  constructor(private service: ProductsService) {}

  @Post()
  async create(@Body() productDto: ProductCreateDto): Promise<{ product: IProduct; message: string }> {
    return await this.service.create(productDto);
  }
  @Get('/')
  async findAll(): Promise<IProduct[]> {
    return await this.service.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<IProduct> {
    return await this.service.findOne(id);
  }
  @Put(':id')
  async update(@Body() productDto: ProductUpdateDto, @Param('id') id: number): Promise<{ product: IProduct; message: string }> {
    return await this.service.update(productDto, id);
  }
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<{ message: string }> {
    return await this.service.delete(id);
  }
}
