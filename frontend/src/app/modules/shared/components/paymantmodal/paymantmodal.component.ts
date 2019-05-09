import {Component, Input, OnInit} from '@angular/core';
import {ReservationModel} from "../../../../models/reservation-model";
import {ReservationService} from "../../../../services/reservation.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../../services/auth.service";

@Component({
  selector: 'app-paymantmodal',
  templateUrl: './paymantmodal.component.html',
  styleUrls: ['./paymantmodal.component.css']
})
export class PaymantmodalComponent implements OnInit {

  @Input() public price: number;
  @Input() public sub: ReservationModel;
  constructor(private reservationService: ReservationService,
              private router: Router,
              public auth: AuthService) { }

  ngOnInit() {
  }



  public makePayment():void{
    this.sub.user = this.auth.user;
    console.log(this.sub);
    this.reservationService.postReservation(this.sub).subscribe(()=>{
      this.router.navigate(['']);
      setTimeout(location.reload.bind(location), 200);
    })
  }

}
