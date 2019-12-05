import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { AddCustomerComponent } from './ui/add-customer/add-customer.component';
import { ApplyLoanComponent } from './ui/apply-loan/apply-loan.component';
import { ForcloseComponent } from './ui/forclose/forclose.component';
import { CalculateEmiComponent } from './ui/calculate-emi/calculate-emi.component';
import { ShowBalanceComponent } from './ui/show-balance/show-balance.component';
import { ShowTransactionsComponent } from './ui/show-transactions/show-transactions.component';
import { PayEmiComponent } from './ui/pay-emi/pay-emi.component';


@NgModule({
  declarations: [
    AppComponent,
    AddCustomerComponent,
    PageNotFoundComponent,
    ApplyLoanComponent,
    ForcloseComponent,
    CalculateEmiComponent,
    ShowBalanceComponent,
    ShowTransactionsComponent,
    PayEmiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
