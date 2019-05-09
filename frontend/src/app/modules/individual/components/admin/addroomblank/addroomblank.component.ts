import { Component, OnInit } from '@angular/core';
import {RoomModel} from "../../../../../models/room-model";
import {RoomService} from "../../../../../services/room.service";

@Component({
  selector: 'app-addroomblank',
  templateUrl: './addroomblank.component.html',
  styleUrls: ['./addroomblank.component.css']
})
export class AddroomblankComponent implements OnInit {

  public newRoom: RoomModel = new RoomModel();

  constructor( private roomService: RoomService) { }

  ngOnInit() {
  }

  public regNewRoom():void{

    if (!this.newRoom.hasBath) {
      this.newRoom.hasBath = 0;
    }else {
      this.newRoom.hasBath = 1;
    }
    if (!this.newRoom.hasBabyBed) {
      this.newRoom.hasBabyBed = 0;
    }else {
      this.newRoom.hasBabyBed = 1;
    }
    if (!this.newRoom.hasFridge) {
      this.newRoom.hasFridge = 0;
    }else {
      this.newRoom.hasFridge = 1;
    }
    if (!this.newRoom.hasTv) {
      this.newRoom.hasTv = 0;
    }else {
      this.newRoom.hasTv = 1;
    }
    console.log(this.newRoom);
    this.roomService.postAllRoom(this.newRoom);
  }
}
