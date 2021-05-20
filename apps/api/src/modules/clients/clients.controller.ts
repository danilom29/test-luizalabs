import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientCreateDto } from './dto/client-create.dto';
import { ClientUpdateDto } from './dto/client-update.dto';
import { IClient } from './interface/client.interface';

@Controller('clientes')
export class ClientsController {
  constructor(private service: ClientsService) {}

  @Post()
  async create(@Body() clientDto: ClientCreateDto): Promise<{ client: IClient; message: string }> {
    return await this.service.create(clientDto);
  }
  @Get('/')
  async findAll(): Promise<IClient[]> {
    return await this.service.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<IClient> {
    return await this.service.findOne(id);
  }
  @Put(':id')
  async update(@Body() clientDto: ClientUpdateDto, @Param('id') id: number): Promise<{ client: IClient; message: string }> {
    return await this.service.update(clientDto, id);
  }
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<{ message: string }> {
    return await this.service.delete(id);
  }
}
