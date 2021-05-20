import { Origin } from '@test-luizalabs/shared';
import { IsNotEmpty, IsInt, IsEnum, MaxLength } from 'class-validator';

export class ProductUpdateDto {
  @IsInt()
  id: number;

  @IsNotEmpty({ message: 'Campo Nome é obrigatório.' })
  @MaxLength(255, { message: 'Campo Nome deve conter até 255 caractéres.' })
  name: string;

  @IsNotEmpty({ message: 'Campo Tamanho é obrigatório.' })
  size: string;

  @IsNotEmpty({ message: 'Campo Fabricação é obrigatório.' })
  @IsEnum(Origin, { message: 'Valor inválido para o campo Fabricação.' })
  origin: string;

  @IsNotEmpty({ message: 'Campo Valor é obrigatório.' })
  value: number;
}
