import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { ListPaymentComponent } from './list-payment/list-payment.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './Pipes/filter.pipe';
import { CreditvaluePipe } from './Pipes/creditvalue.pipe';
import { CreditimgPipe } from './Pipes/creditimg.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddPaymentComponent,
    ListPaymentComponent,
    FilterPipe,
    CreditvaluePipe,
    CreditimgPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
