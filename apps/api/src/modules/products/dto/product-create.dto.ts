import { IsNotEmpty, IsEnum, MaxLength, Validate } from 'class-validator';
import { Origin } from '@test-luizalabs/shared';
import { NameProductAlreadyExist } from '../validate/name-already-exist.constraint';

export class ProductCreateDto {
  @IsNotEmpty({ message: 'Campo Nome é obrigatório.' })
  @MaxLength(255, { message: 'Campo Nome deve conter até 255 caractéres.' })
  @Validate(NameProductAlreadyExist, {
    message:
      'Já existe um produto registrado com o Nome fornecido. Por favor altere o Nome para realizar a operação.',
  })
  name: string;

  @IsNotEmpty({ message: 'Campo Tamanho é obrigatório.' })
  size: string;

  @IsNotEmpty({ message: 'Campo Fabricação é obrigatório.' })
  @IsEnum(Origin, { message: 'Valor inválido para o campo Fabricação.' })
  origin: string;

  @IsNotEmpty({ message: 'Campo Valor é obrigatório.' })
  value: number;
}
