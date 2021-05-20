import { ProductFormComponent } from './product-form.component';
import { SharedModule } from './../../../../shared/shared.module';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule, MockActivatedRoute } from '@test-luizalabs/shared';
import { ProductsService } from '../../products.service';
import { IProduct } from 'apps/api/src/modules/products/interface/product.interface';
import { ProductsListComponent } from '../products-list/products-list.component';

describe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let service: ProductsService;
  let fixture: ComponentFixture<ProductFormComponent>;
  const form = {
    name: 'Teste',
  };
  const product: IProduct = {
    name: 'Teste',
    origin: 'Teste',
    size: 'Teste',
    value: 1,
  };
  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        declarations: [ProductFormComponent, ProductsListComponent],
        imports: [
          NoopAnimationsModule,
          ReactiveFormsModule,
          MaterialModule,
          HttpClientModule,
          RouterTestingModule.withRoutes([{ path: 'clientes', component: ProductsListComponent }]),
          SharedModule,
        ],
        providers: [],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ProductsService);
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should call save function and call service', () => {
    spyOn(service, 'create');
    component.form.patchValue(form);
    fixture.detectChanges();
    void component.handleSaveOrUpdate();
    fixture.detectChanges();
  });
  it('should call update function and call service', () => {
    spyOn(service, 'update');
    component.form.patchValue(form);
    component.id = 1;
    fixture.detectChanges();
    void component.handleSaveOrUpdate();
    fixture.detectChanges();
  });
  it('should ngOnit id not null', () => {
    spyOn(service, 'getOne').and.returnValue(Promise.resolve(product));
    component.activatedRoute = new MockActivatedRoute();
    component.ngOnInit();
    fixture.detectChanges();
  });
});
