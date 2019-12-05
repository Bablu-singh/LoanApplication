import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoanAppService } from '../loan-app.service';

@Component({
  selector: 'app-forclose',
  templateUrl: './forclose.component.html',
  styleUrls: ['./forclose.component.css']
})
export class ForcloseComponent implements OnInit {
  @ViewChild("forCloser",null)
  ForCloserForm:NgForm;
  accountno;
  details:any='';
  msg:any="";
  successmsg:any="";
  
  constructor(private service:LoanAppService) { }

  ngOnInit() {
  }
  
  
  showForCloseBal(){
    this.accountno=this.ForCloserForm.value.accountno;
    setTimeout(() => {
      this.service.forCloseCalc(this.accountno).subscribe((data)=>this.details=data);      
    }, 100);
    console.log(this.details);
    this.successmsg='';
  }
  forClose(){
    setTimeout(() => {
      this.service.forClose(this.accountno).subscribe((data)=>this.successmsg=data);  
    }, 50);
    this.details='';
  }
  notpay(){
    this.details='';
    this.successmsg='';
  }
}
