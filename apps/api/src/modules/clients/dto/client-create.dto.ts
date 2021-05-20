import { IsNotEmpty, IsInt, IsEnum, MaxLength, Validate } from 'class-validator';
import { Gender } from '@test-luizalabs/shared';
import { EmailClientAlreadyExist } from '../validate/email-already-exist.constraint';
import { CpfClientAlreadyExist } from '../validate/cpf-already-exist.constraint';

export class ClientCreateDto {
  @IsNotEmpty({ message: 'Campo Nome é obrigatório.' })
  @MaxLength(255, { message: 'Campo Nome deve conter até 255 caractéres.' })
  name: string;

  @IsNotEmpty({ message: 'Campo CPF é obrigatório.' })
  @IsInt({ message: 'CPF: Apenas números inteiros' })
  @Validate(CpfClientAlreadyExist, {
    message:
      'Já existe um client registrado com o CPF fornecido. Por favor altere o CPF para realizar a operação.',
  })
  cpf: number;

  @IsNotEmpty({ message: 'Campo Sexo é obrigatório.' })
  @IsEnum(Gender, { message: 'Valor inválido para o Sexo.' })
  gender: string;

  @IsNotEmpty({ message: 'Campo E-mail é obrigatório.' })
  @MaxLength(255, { message: 'Campo E-mail deve conter até 255 caractéres.' })
  @Validate(EmailClientAlreadyExist, {
    message:
      'Já existe um client registrado com o e-mail fornecido. Por favor altere o e-mail para realizar a operação.',
  })
  email: string;
}
