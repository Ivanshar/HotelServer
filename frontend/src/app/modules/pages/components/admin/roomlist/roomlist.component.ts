import { Component, OnInit } from '@angular/core';
import {RoomModel} from "../../../../../models/room-model";
import {RoomService} from "../../../../../services/room.service";
import {UserService} from "../../../../../services/user.service";

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent implements OnInit {
  public rooms: RoomModel[];

  constructor(private userService: RoomService) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData():void{
    this.userService.getAllRooms().subscribe(data=>{
      this.rooms = data as RoomModel[];

    })
  }
}
