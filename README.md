## Installation

`cp .env.example .env` copiar env e modificar as configurações de banco.

`npm install`

`npm run migration:run` executar as migrations.

## Migration

`npm run migration:create MigrationName` Create a migration.

## Development start server

`ng serve my-app` api | front

## Running unit tests

`ng test my-app` api | front. Executa o teste unitário via [Jest](https://jestjs.io).

## Build

`ng build my-app` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist/`. Use o sinalizador `--prod` para uma construção de produção.
