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
      this.newRoom.hasBath = false;
    }
    if (!this.newRoom.hasBabyBed) {
      this.newRoom.hasBabyBed = false;
    }
    if (!this.newRoom.hasFridge) {
      this.newRoom.hasFridge = false;
    }
    if (!this.newRoom.hasTv) {
      this.newRoom.hasTv = false;
    }
    if (!this.newRoom.isActive) {
      this.newRoom.isActive = false;
    }
    console.log(this.newRoom);
    this.roomService.postAllRoom(this.newRoom);
  }
}
