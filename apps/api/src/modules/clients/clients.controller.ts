import { Body, Controller, Post } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientCreateDto } from './dto/client-create.dto';
import { IClient } from './interface/client.interface';

@Controller('clientes')
export class ClientsController {
  constructor(private service: ClientsService) {}

  @Post()
  async create(@Body() clientDto: ClientCreateDto): Promise<{ client: IClient; message: string }> {
    return await this.service.create(clientDto);
  }
}
