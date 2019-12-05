import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoanAppService } from '../loan-app.service';

@Component({
  selector: 'app-show-balance',
  templateUrl: './show-balance.component.html',
  styleUrls: ['./show-balance.component.css']
})
export class ShowBalanceComponent implements OnInit {
  @ViewChild('balance',null)
  Balance:NgForm;
  balanceMsg:any="";
  constructor(private service:LoanAppService) { }
  
  ngOnInit() {
  }
  showBalance(){
    let accountNo=this.Balance.value.accountno;
    setTimeout(() => {
      this.service.getBalance(accountNo).subscribe((data)=>this.balanceMsg=data);  
    }, 100);
    console.log(this.balanceMsg);
  }
}
