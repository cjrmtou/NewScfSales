import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import * as authSvcs from './services/authentication.service';
import * as int from './interceptors/winauth-interceptor';
import { AppRoutingModule } from './/app-routing.module';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DataTablesModule } from 'angular-datatables';
import * as salesService from './services/customer-data.service';
import { DeliveryWindowComponent } from './delivery-window/delivery-window.component';
import { TableCellTimeComponent } from './table-cell-time/table-cell-time.component';
import { TableCellEndTimeComponent } from './table-cell-end-time/table-cell-end-time.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    DeliveryWindowComponent,
    TableCellTimeComponent,
    TableCellEndTimeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    Ng4LoadingSpinnerModule.forRoot(),
    DataTablesModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: int.WinAuthInterceptor,
      multi: true
    },
    authSvcs.AuthenticationService,
    salesService.CustomerDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
