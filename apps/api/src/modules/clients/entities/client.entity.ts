import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm';

@Entity({ name: 'clients' })
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  gender: string;

  @Column()
  cpf: string;

  @Column()
  email: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: string;
}
