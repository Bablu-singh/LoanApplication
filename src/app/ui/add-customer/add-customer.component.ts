import { Component, OnInit, ViewChild, ComponentFactoryResolver, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ICustomer } from '../ICustomer.interface';
import { LoanAppService } from '../loan-app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  @ViewChild("customer",null) 
  Customer:NgForm
  @Input()
  accountNo:any;
  constructor(private custservice:LoanAppService,private router:Router) { }
  name1:string='';
  email1:string='';
  address1:string='';
  phone1:string='';
  dob1:string='';
  ngOnInit() {
  }
  msg:any="";
  onSubmit(){
    console.log(this.Customer);
    let cust:ICustomer=this.Customer.value;
    this.custservice.addCustomer(cust).subscribe((data)=>this.accountNo=data);
    setTimeout(() => {
      this.custservice.addCustomer(cust).subscribe((data)=>this.accountNo=data);
      this.router.navigate(['/applyloan/',this.accountNo]);
    }, 100);
      
  }
}

