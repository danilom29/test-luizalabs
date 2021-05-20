## Installation

`cp .env.example .env` copiar env e modificar as configurações de banco.

`npm install`

`npm run migration:run` executar as migrations.

## Migration

`npm run migration:create MigrationName` Create a migration.

## Seed

`npm run seed:run -- --seed=SeedClass` Run seeds individually.

## Development start server

`ng serve my-app`

## Code scaffolding

`ng g component my-component --project=my-app` to generate a new component.

`ng g module my-module --project=api` to generate a new module.

`ng g module my-module --project=front --routing` to generate a new module in front.

## Lint and Prittier

`npm run lint` Check eslint.

`npm run lint:prettier` Check all files are formated.

`npm run lint:prettierwrite` Format all files with prettier.

## Running unit tests

`ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

## Generate an application

`ng g @nrwl/angular:app my-app` to generate an application.

## Generate a library

`ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@test-luizalabs/mylib`.

## Build

`ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
