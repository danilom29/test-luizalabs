import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { HttpClientModule } from '@angular/common/http';
import { ISector } from './interface/sector.interface';
import { SectorsService } from './sectors.service';
import { TestBed } from '@angular/core/testing';
import { DefaultCrudService } from '../../shared/services/defaultCrud/default-crud.service';

describe('SectorsService', () => {
  let service: SectorsService;
  let crudService: DefaultCrudService;
  const sector: ISector = {
    name: 'teste',
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ApolloTestingModule, MatSnackBarModule],
    });

    service = TestBed.inject(SectorsService);
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

  it('should be getSectors', () => {
    spyOn(crudService, 'graphql').and.callFake(() => Promise.resolve([]));
    void service.getSectors({ name: '' });
    void expect(service.getSectors({ name: '' })).toBeTruthy();
  });
});
