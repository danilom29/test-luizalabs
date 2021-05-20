import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DefaultCrudService } from 'apps/front/src/shared/services/defaultCrud/default-crud.service';
import { SharedModule } from '../../../../shared/shared.module';
import { ClientsListComponent } from './clients-list.component';
import { ClientsService } from '../../clients.service';
import { MaterialModule } from '@test-luizalabs/shared';
import { IClient } from 'apps/api/src/modules/clients/interface/client.interface';

describe('ClientsListComponent', () => {
  let component: ClientsListComponent;
  let service: ClientsService;
  let fixture: ComponentFixture<ClientsListComponent>;
  const client: IClient = {
    cpf: '123445566',
    email: 'teste@email.com',
    gender: 'Masculino',
    name: 'Teste',
    id: 1,
  };
  const clients: IClient[] = [client];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientsListComponent],
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
    service = TestBed.inject(ClientsService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsListComponent);
    component = fixture.componentInstance;
    component.clients = [
      {
        name: 'teste',
      },
    ];
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
    spyOn(service, 'delete').and.returnValue(Promise.resolve(client));
    component.deleted(1);
    fixture.detectChanges();
  });

  it('should deletedMulti', () => {
    spyOn(service, 'delete').and.returnValue(Promise.resolve(client));
    component.selection.toggle(1);
    component.deletedMulti();
    fixture.detectChanges();
  });

  it('should deleted more than one', () => {
    spyOn(service, 'delete').and.returnValue(Promise.resolve(client));
    component.selection.toggle(1);
    component.selection.toggle(2);
    component.deletedMulti();
    fixture.detectChanges();
  });
});
