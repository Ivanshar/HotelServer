import {Component, Input, OnInit} from '@angular/core';
import {ReservationModel} from "../../../../models/reservation-model";
import {ReservationService} from "../../../../services/reservation.service";

@Component({
  selector: 'app-bookroomcontent',
  templateUrl: './bookroomcontent.component.html',
  styleUrls: ['./bookroomcontent.component.css']
})
export class BookroomcontentComponent implements OnInit {
  private child: number;
  private adult: number;
  @Input() public  roomType: string;


  public newReservation: ReservationModel = new ReservationModel();

  constructor( private roomService: ReservationService) { }

  ngOnInit() {
  }

  public makeReservation():void{
    this.newReservation.personCount = Number(this.adult) + Number(this.child);
    if (!this.newReservation.hasBath) {
      this.newReservation.hasBath = false;
    }
    if (!this.newReservation.hasBabyBed) {
      this.newReservation.hasBabyBed = false;
    }
    if (!this.newReservation.hasFridge) {
      this.newReservation.hasFridge = false;
    }
    if (!this.newReservation.hasTv) {
      this.newReservation.hasTv = false;
    }
    console.log(this.newReservation);
    this.roomService.postReservation(this.newReservation);
  }
}
