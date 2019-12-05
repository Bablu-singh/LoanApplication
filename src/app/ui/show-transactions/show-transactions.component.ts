import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ITransactions } from 'src/app/ui/ITransactions.interface';
import { LoanAppService } from '../loan-app.service';

@Component({
  selector: 'app-show-transactions',
  templateUrl: './show-transactions.component.html',
  styleUrls: ['./show-transactions.component.css']
})
export class ShowTransactionsComponent implements OnInit {
  @ViewChild("show",null)
  ShowTrans:NgForm;
  @ViewChild("search",null)
  Search:NgForm;

  success:boolean=false;
  flag:boolean=false;
  transactions:ITransactions[];
  constructor(private service:LoanAppService) {
    
  }

  ngOnInit() {
  }

  showTrans(){
    let accountno:number=this.ShowTrans.value.accountno;
   
    this.transactions=this.service.getTransations();
    
    this.transactions=this.transactions.filter(data=>data.custId.toString()===accountno.toString());
    this.success=true;
  }
  onSearch(){
    this.transactions=this.service.searchTrans(this.Search.value.searchItem);
    this.flag=true;
  }
}
