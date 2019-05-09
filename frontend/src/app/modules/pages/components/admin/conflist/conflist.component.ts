import { Component, OnInit } from '@angular/core';
import {EventModel} from "../../../../../models/event-model";
import {EventService} from "../../../../../services/event.service";

@Component({
  selector: 'app-conflist',
  templateUrl: './conflist.component.html',
  styleUrls: ['./conflist.component.css']
})
export class ConflistComponent implements OnInit {

  public events: EventModel[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData():void{
    this.eventService.getAllEvents().subscribe(data=>{
      this.events = data as EventModel[];

    })
  }

}
