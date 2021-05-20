import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableClient1621466092825 implements MigrationInterface {
  private clientTable = new Table({
    name: 'clients',
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
        name: 'email',
        type: 'VARCHAR',
        length: '255',
      },
      {
        name: 'cpf',
        type: 'VARCHAR',
        length: '11',
      },
      {
        name: 'gender',
        type: 'ENUM',
        enum: ['Feminino', 'Masculino'],
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
    await queryRunner.createTable(this.clientTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.clientTable);
  }
}
