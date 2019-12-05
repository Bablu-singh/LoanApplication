import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './ui/add-customer/add-customer.component';
import { ApplyLoanComponent } from './ui/apply-loan/apply-loan.component';
import { PayEmiComponent } from './ui/pay-emi/pay-emi.component';
import { ShowBalanceComponent } from './ui/show-balance/show-balance.component';
import { ShowTransactionsComponent } from './ui/show-transactions/show-transactions.component';
import { ForcloseComponent } from './ui/forclose/forclose.component';
import { CalculateEmiComponent } from './ui/calculate-emi/calculate-emi.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
{path:"addcust",component:AddCustomerComponent},
{path:"applyloan/:accno",component:ApplyLoanComponent},
{path:"calcemi",component:CalculateEmiComponent},
{path:"payemi",component:PayEmiComponent},
{path:"showbalance",component:ShowBalanceComponent},
{path:"showtrans",component:ShowTransactionsComponent},
{path:"forclose",component:ForcloseComponent},
{path:"",redirectTo:'/addcust',pathMatch:"full"},
{path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
