import { ProductsService } from './products.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@test-luizalabs/shared';
import { SharedModule } from '../../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NgxCurrencyModule } from 'ngx-currency';
import { NtmCoreModule } from '@ntm-al/angular';

@NgModule({
  declarations: [ProductsListComponent, ProductFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    ProductsRoutingModule,
    NgxCurrencyModule,
    NtmCoreModule,
  ],
  providers: [ProductsService],
})
export class ProductsModule {}
