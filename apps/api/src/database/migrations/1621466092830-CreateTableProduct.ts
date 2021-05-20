import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableProduct1621466092830 implements MigrationInterface {
  private productTable = new Table({
    name: 'products',
    columns: [
      {
        name: 'id',
        type: 'INTEGER',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'name',
        type: 'VARCHAR',
        length: '255',
      },
      {
        name: 'size',
        type: 'VARCHAR',
        length: '255',
      },
      {
        name: 'value',
        type: 'DECIMAL',
        length: '18,2',
      },
      {
        name: 'origin',
        type: 'ENUM',
        enum: ['Importado', 'Nacional'],
      },
      {
        name: 'created_at',
        type: 'TIMESTAMP',
        default: 'NOW()',
      },
      {
        name: 'updated_at',
        type: 'TIMESTAMP',
        default: 'NOW() ON UPDATE CURRENT_TIMESTAMP()',
      },
      {
        name: 'deleted_at',
        type: 'TIMESTAMP',
        isNullable: true,
      },
    ],
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.productTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.productTable);
  }
}
