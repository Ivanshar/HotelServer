import { Component, OnInit } from '@angular/core';
import {EventModel} from "../../../../models/event-model";
import {EventService} from "../../../../services/event.service";
import file from "../../../../../assets/imgSrc.json"

@Component({
  selector: 'app-eventcards',
  templateUrl: './eventcards.component.html',
  styleUrls: ['./eventcards.component.css']
})
export class EventcardsComponent implements OnInit {

  public events: EventModel[];

  public imgLink = file;

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
