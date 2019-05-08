import { Component, OnInit } from '@angular/core';
import {EventModel} from "../../../../../models/event-model";
import {EventService} from "../../../../../services/event.service";

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {

  public users: EventModel[];

  constructor(private userService: EventService) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData():void{
    this.userService.getAllEvents().subscribe(data=>{
      this.users = data as EventModel[];

    })
  }

}
