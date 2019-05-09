import { Component, OnInit } from '@angular/core';
import {RoomModel} from "../../../../../models/room-model";
import {RoomService} from "../../../../../services/room.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addroomblank',
  templateUrl: './addroomblank.component.html',
  styleUrls: ['./addroomblank.component.css']
})
export class AddroomblankComponent implements OnInit {

  public newRoom: RoomModel = new RoomModel();

  public hasBath: boolean;
  public hasBabyBed: boolean;
  public hasFridge: boolean;
  public hasTv: boolean;
  public isActive: boolean;

  constructor( private roomService: RoomService,
               private router: Router) { }

  ngOnInit() {
  }

  public regNewRoom():void{

    if (!this.hasBath) {
      this.newRoom.hasBath = 0;
    }else {
      this.newRoom.hasBath = 1;
    }
    if (!this.hasBabyBed) {
      this.newRoom.hasBabyBed = 0;
    }else {
      this.newRoom.hasBabyBed = 1;
    }
    if (!this.hasFridge) {
      this.newRoom.hasFridge = 0;
    }else {
      this.newRoom.hasFridge = 1;
    }
    if (!this.hasTv) {
      this.newRoom.hasTv = 0;
    }else {
      this.newRoom.hasTv = 1;
    }
    if (!this.isActive) {
      this.newRoom.isActive = 0;
    }else {
      this.newRoom.isActive = 1;
    }
    console.log(this.newRoom);
    this.roomService.postAllRoom(this.newRoom).subscribe(()=>{
      this.router.navigate(['/adminmenu']);
    });
  }
}
