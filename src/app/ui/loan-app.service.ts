import { Injectable } from '@angular/core';
import { ICustomer } from './ICustomer.interface';
import { HttpClient } from '@angular/common/http';

import { ITransactions } from './ITransactions.interface';

@Injectable({
  providedIn: 'root'
})
export class LoanAppService {
  customers:ICustomer[];
  trans:ITransactions[];
  constructor(private http:HttpClient) {  
    this.http.get<ITransactions[]>("http://localhost:3232/showTransactions").subscribe((data)=>this.trans=data);
   }
   
   addCustomer(custDetails:ICustomer){
     return this.http.post("http://localhost:3232/addCustomer",
     custDetails);
   }
   addLoan(loanDetails){
    return this.http.post("http://localhost:3232/applyloan",loanDetails,
    {responseType: 'text' as 'json'});
  }
  calculateEmi(emiDetails){
    return this.http.post("http://localhost:3232/calcemi",emiDetails,
    {responseType: 'text' as 'json'});
  }
  getTransations():ITransactions[]{
    console.log(this.trans);
    return this.trans;
  }
  searchTrans(searchText){
    let t:ITransactions[]=this.trans.filter(p=>p.trans_id.toString()===searchText.toString());
    return t;
  }
  getBalance(accountNo){
    return this.http.get("http://localhost:3232/showBalance?accountNO="+accountNo,
    {responseType: 'text' as 'json'});  
  }
  showDetails(accountNo){
    
    return this.http.get("http://localhost:3232/showEmi?accountNo="+accountNo,
    {responseType: 'text' as 'json'});  
  }
  payEmi(accountNo){
    return this.http.get("http://localhost:3232/payEmi?accountNo="+accountNo,
    {responseType: 'text' as 'json'});
  }
  forCloseCalc(accountNo){
    
    return this.http.get("http://localhost:3232/forclosercalc?accountNo="+accountNo,
    {responseType: 'text' as 'json'});  
  }
  forClose(accountNo){
    return this.http.get("http://localhost:3232/forcloser?accountNo="+accountNo,
    {responseType: 'text' as 'json'});  
  }
}
