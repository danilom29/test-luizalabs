import { ProductsListComponent } from './products-list.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DefaultCrudService } from 'apps/front/src/shared/services/defaultCrud/default-crud.service';
import { SharedModule } from '../../../../shared/shared.module';
import { MaterialModule } from '@test-luizalabs/shared';
import { ProductsService } from '../../products.service';
import { IProduct } from 'apps/api/src/modules/products/interface/product.interface';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let service: ProductsService;
  let fixture: ComponentFixture<ProductsListComponent>;
  const product: IProduct = {
    name: 'Teste',
    origin: 'Teste',
    size: 'Teste',
    value: 1,
  };
  const clients: IProduct[] = [product];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsListComponent],
      imports: [
        MaterialModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MatDialogModule,
        HttpClientModule,
        CommonModule,
        SharedModule,
      ],
      providers: [
        DefaultCrudService,
        {
          provide: MatDialogRef,
          useValue: {
            close: () => {},
          },
        },
      ],
    }).compileComponents();
    service = TestBed.inject(ProductsService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    component.products = [product];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getAll', () => {
    spyOn(service, 'getAll').and.returnValue(Promise.resolve(clients));
    component.getClients();
    fixture.detectChanges();
  });

  it('should deleted', () => {
    spyOn(service, 'delete').and.returnValue(Promise.resolve(product));
    component.deleted(1);
    fixture.detectChanges();
  });

  it('should deletedMulti', () => {
    spyOn(service, 'delete').and.returnValue(Promise.resolve(product));
    component.selection.toggle(1);
    component.deletedMulti();
    fixture.detectChanges();
  });

  it('should deleted more than one', () => {
    spyOn(service, 'delete').and.returnValue(Promise.resolve(product));
    component.selection.toggle(1);
    component.selection.toggle(2);
    component.deletedMulti();
    fixture.detectChanges();
  });
});
