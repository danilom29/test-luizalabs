import { IProduct } from './../../../../api/src/modules/products/interface/product.interface';
import { ProductsService } from './products.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { DefaultCrudService } from '../../shared/services/defaultCrud/default-crud.service';

describe('ProductsService', () => {
  let service: ProductsService;
  let crudService: DefaultCrudService;
  const product: IProduct = {
    name: 'Teste',
    origin: 'Teste',
    size: 'Teste',
    value: 1,
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MatSnackBarModule],
    });

    service = TestBed.inject(ProductsService);
    crudService = TestBed.inject(DefaultCrudService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should to save product and call save', () => {
    const spy = spyOn(crudService, 'httpPost').and.callFake(() => Promise.resolve());
    void service.create(product);
    void expect(spy).toHaveBeenCalled();
  });
  it('should to save product and call update', () => {
    const spy = spyOn(crudService, 'httpPut').and.returnValue(Promise.resolve(product));
    void service.update(product, 1);
    void expect(spy).toHaveBeenCalled();
  });

  it('should to get product', () => {
    const spy = spyOn(crudService, 'httpGet').and.callFake(() => Promise.resolve(product));
    void service.getOne(1);
    void expect(spy).toHaveBeenCalled();
  });

  it('should to get all sectors', () => {
    const spy = spyOn(crudService, 'httpGet').and.callFake(() => Promise.resolve([product]));
    void service.getAll();
    void expect(spy).toHaveBeenCalled();
  });

  it('should to delete product', () => {
    const spy = spyOn(crudService, 'httpDelete').and.callFake(() => Promise.resolve({ message: 'Deletado!' }));
    void service.delete(1);
    void expect(spy).toHaveBeenCalled();
  });
});
