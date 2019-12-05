import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoanAppService } from '../loan-app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css']
})
export class ApplyLoanComponent implements OnInit {
  @ViewChild("loan",null)
  Loan:NgForm;
  accno:string='';
  loanamt:string='';
  intrest:string='';
  duration:string='';
  constructor(private loanservice:LoanAppService,private route: ActivatedRoute) {
    route.params.subscribe( params =>this.accno=params['accno'] );
   }
  
  ngOnInit() {
  }
  msg:any='';
  onSubmit(){
    console.log(this.Loan.value);
    let loandetails=this.Loan.value;
    
    setTimeout(() => {
      this.loanservice.addLoan(loandetails).subscribe((data)=>this.msg=data);  
    }, 100);
    
    console.log(this.msg);
    
  }

}
