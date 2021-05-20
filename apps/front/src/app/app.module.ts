import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { ApiInterceptor, MaterialModule } from '@test-luizalabs/shared';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClientsModule } from '../modules/clients/clients.module';
import { ProductsModule } from '../modules/products/products.module';
import { NtmCoreModule } from '@ntm-al/angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    AppRoutingModule,
    NtmCoreModule,
    ClientsModule,
    ProductsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
