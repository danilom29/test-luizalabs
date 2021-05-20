import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  origin: string;

  @Column()
  size: string;

  @Column()
  value: number;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: string;
}
