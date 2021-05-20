import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@test-luizalabs/shared';
import { SharedModule } from '../../shared/shared.module';
import { ClientsService } from './clients.service';
import { ClientFormComponent } from '../clients/components/client-form/client-form.component';
import { ClientsListComponent } from '../clients/components/clients-list/clients-list.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [ClientsListComponent, ClientFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ClientsRoutingModule,
    HttpClientModule,
    SharedModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [ClientsService],
})
export class ClientsModule {}
