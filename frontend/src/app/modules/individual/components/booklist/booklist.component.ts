import { Component, OnInit } from '@angular/core';
import {ReservationModel} from "../../../../models/reservation-model";
import {ReservationService} from "../../../../services/reservation.service";
import {EventrecordModel} from "../../../../models/eventrecord-model";
import {EventrecordService} from "../../../../services/eventrecord.service";
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  public reservations: ReservationModel[];
  public eventrecords: EventrecordModel[];
  constructor(private reservationService: ReservationService, private  eventrecordServise: EventrecordService) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData():void{
    this.reservationService.getAllReservations().subscribe(data=>{
      this.reservations = data as ReservationModel[];
    });
    this.eventrecordServise.getAllEventrecords().subscribe((data=>{
      this.eventrecords = data as EventrecordModel[];
    }))
  }

}
