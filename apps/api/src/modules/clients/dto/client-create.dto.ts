import { IsNotEmpty, IsInt, IsEnum, MaxLength } from 'class-validator';
import { Gender } from '@test-luizalabs/shared';

export class ClientCreateDto {
  @IsNotEmpty({ message: 'Campo Nome é obrigatório.' })
  @MaxLength(255, { message: 'Campo Nome deve conter até 255 caractéres.' })
  name: string;

  @IsNotEmpty({ message: 'Campo CPF é obrigatório.' })
  @IsInt({ message: 'CPF: Apenas números inteiros' })
  @MaxLength(11, { message: 'Campo CPF deve conter até 11 caractéres.' })
  cpf: number;

  @IsNotEmpty({ message: 'Campo Sexo é obrigatório.' })
  @IsEnum(Gender, { message: 'Valor inválido para o Sexo.' })
  gender: string;

  @IsNotEmpty({ message: 'Campo E-mail é obrigatório.' })
  @MaxLength(255, { message: 'Campo E-mail deve conter até 255 caractéres.' })
  email: string;
}
