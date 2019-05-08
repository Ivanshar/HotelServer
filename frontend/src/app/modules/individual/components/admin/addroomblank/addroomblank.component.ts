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

  constructor() { }

  ngOnInit() {
  }

  public regNewRoom():void{
    console.log(this.newRoom);
  }

}
