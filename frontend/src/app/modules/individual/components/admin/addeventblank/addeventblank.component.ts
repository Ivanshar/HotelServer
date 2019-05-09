import { Component, OnInit } from '@angular/core';
import {EventModel} from "../../../../../models/event-model";
import {EventService} from "../../../../../services/event.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addeventblank',
  templateUrl: './addeventblank.component.html',
  styleUrls: ['./addeventblank.component.css']
})
export class AddeventblankComponent implements OnInit {


  public newEvent: EventModel = new EventModel();

  public eventImage: File = null;

  constructor( private eventService: EventService,
               private router: Router) { }

  ngOnInit() {
    this.newEvent.eventType = "Спортивное";
  }

  public onChange(files): void{
    this.eventImage = files[0];
  }

  public regNewEvent():void{
    this.newEvent.logoUrl = this.newEvent.name.trim()+"-logo.jpg".trim();
    this.eventService.saveEventImage(this.eventImage, this.newEvent.logoUrl).subscribe(()=>{
      this.eventService.postAllEvent(this.newEvent).subscribe(()=>{
        this.router.navigate(['/adminmenu']);
        setTimeout(location.reload.bind(location), 200);
      });
    });
  }



}
