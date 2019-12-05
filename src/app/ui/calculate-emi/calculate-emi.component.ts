import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoanAppService } from '../loan-app.service';
import { ActivatedRoute } from '@angular/router';
import { IEmi } from 'src/app/IEmi.interface';

@Component({
  selector: 'app-calculate-emi',
  templateUrl: './calculate-emi.component.html',
  styleUrls: ['./calculate-emi.component.css']
})
export class CalculateEmiComponent implements OnInit {
  @ViewChild("emi",null)
  Emi:NgForm;
  loanamt:string='';
  intrest:string='';
  duration:string='';
  constructor(private loanservice:LoanAppService) {
  }
  
  ngOnInit() {
  }
  msg:any='';
  onSubmit(){
    console.log(this.Emi.value);
    let emidetails:IEmi=this.Emi.value;
    
    setTimeout(() => {
      this.loanservice.calculateEmi(emidetails).subscribe((data)=>this.msg=data);  
    }, 100);
    
    console.log(this.msg);
    
  }
}
