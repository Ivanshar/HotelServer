import { Component, OnInit } from '@angular/core';
import {EventModel} from "../../../../../models/event-model";
import {EventService} from "../../../../../services/event.service";

@Component({
  selector: 'app-addeventblank',
  templateUrl: './addeventblank.component.html',
  styleUrls: ['./addeventblank.component.css']
})
export class AddeventblankComponent implements OnInit {


  public newEvent: EventModel = new EventModel();

  constructor( private roomService: EventService) { }

  ngOnInit() {
  }

  public regNewEvent():void{
    console.log(this.newEvent);
    this.roomService.postAllEvent(this.newEvent);
  }

}
