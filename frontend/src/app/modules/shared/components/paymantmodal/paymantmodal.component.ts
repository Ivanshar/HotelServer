import { Component, OnInit } from '@angular/core';
import {BillingAccountModel} from "../../../../models/billingaccount-model";

@Component({
  selector: 'app-paymantmodal',
  templateUrl: './paymantmodal.component.html',
  styleUrls: ['./paymantmodal.component.css']
})
export class PaymantmodalComponent implements OnInit {
  public wallets: BillingAccountModel[];
  constructor() { }

  ngOnInit() {
  }



  public makePaymant():void{

    console.log(this.wallets);
   // this.wallets.postReservation(this.wallets);
  }

}
