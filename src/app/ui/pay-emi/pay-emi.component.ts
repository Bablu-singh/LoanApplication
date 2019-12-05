import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { NgForm } from '@angular/forms';
import { LoanAppService } from '../loan-app.service';

@Component({
  selector: 'app-pay-emi',
  templateUrl: './pay-emi.component.html',
  styleUrls: ['./pay-emi.component.css']
})
export class PayEmiComponent implements OnInit {
  @ViewChild("show",null)
  Show:NgForm;
  accountNo:number;
  constructor(private service:LoanAppService) { }
  details:any='';
  msg:any="";
  successmsg:any="";
  showDetails(){
    this.accountNo=this.Show.value.accountno;
    setTimeout(() => {
      this.service.showDetails(this.accountNo).subscribe((data)=>this.details=data);  
    }, 100);
    this.successmsg='';
  }
  pay(){
    setTimeout(() => {
      this.service.payEmi(this.accountNo).subscribe((data)=>this.successmsg=data);  
    }, 100);
    this.details='';
  }
  notpay(){
    this.details='';
    this.successmsg='';
  }
  ngOnInit(): void {

  }
 
}
