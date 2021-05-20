import { ClientsService } from './clients.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { DefaultCrudService } from '../../shared/services/defaultCrud/default-crud.service';
import { IClient } from 'apps/api/src/modules/clients/interface/client.interface';

describe('ClientsService', () => {
  let service: ClientsService;
  let crudService: DefaultCrudService;
  const sector: IClient = {
    cpf: '123445566',
    email: 'teste@email.com',
    gender: 'Masculino',
    name: 'Teste',
    id: 1,
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MatSnackBarModule],
    });

    service = TestBed.inject(ClientsService);
    crudService = TestBed.inject(DefaultCrudService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should to save sector and call save', () => {
    const spy = spyOn(crudService, 'httpPost').and.callFake(() => Promise.resolve());
    void service.create(sector);
    void expect(spy).toHaveBeenCalled();
  });
  it('should to save sector and call update', () => {
    const spy = spyOn(crudService, 'httpPut').and.returnValue(Promise.resolve(sector));
    void service.update(sector, 1);
    void expect(spy).toHaveBeenCalled();
  });

  it('should to get sector', () => {
    const spy = spyOn(crudService, 'httpGet').and.callFake(() => Promise.resolve(sector));
    void service.getOne(1);
    void expect(spy).toHaveBeenCalled();
  });

  it('should to get all sectors', () => {
    const spy = spyOn(crudService, 'httpGet').and.callFake(() => Promise.resolve([sector]));
    void service.getAll();
    void expect(spy).toHaveBeenCalled();
  });

  it('should to delete sector', () => {
    const spy = spyOn(crudService, 'httpDelete').and.callFake(() => Promise.resolve({ message: 'Deletado!' }));
    void service.delete(1);
    void expect(spy).toHaveBeenCalled();
  });
});
