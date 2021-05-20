import { SharedModule } from './../../../../shared/shared.module';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule, MockActivatedRoute } from '@test-luizalabs/shared';
import { ClientFormComponent } from '../client-form/client-form.component';
import { ClientsListComponent } from '../clients-list/clients-list.component';
import { IClient } from 'apps/api/src/modules/clients/interface/client.interface';
import { ClientsService } from '../../clients.service';

describe('ClientFormComponent', () => {
  let component: ClientFormComponent;
  let service: ClientsService;
  let fixture: ComponentFixture<ClientFormComponent>;
  const form = {
    name: 'Teste',
  };
  const client: IClient = {
    name: 'Teste',
  };
  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        declarations: [ClientFormComponent, ClientsListComponent],
        imports: [
          NoopAnimationsModule,
          ReactiveFormsModule,
          MaterialModule,
          HttpClientModule,
          RouterTestingModule.withRoutes([{ path: 'clientes', component: ClientsListComponent }]),
          SharedModule,
        ],
        providers: [],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFormComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ClientsService);
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
    spyOn(service, 'getOne').and.returnValue(Promise.resolve(client));
    component.activatedRoute = new MockActivatedRoute();
    component.ngOnInit();
    fixture.detectChanges();
  });
});
