import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EventModel} from "../models/event-model";
import {Observable} from "rxjs";
import {UserSafeModel} from "../models/user-model";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http: HttpClient) { }

  public postAllEvent(event: EventModel):Observable<any>{
    return this.http.post("/api/events", event );
  }

  public getAllEvents():Observable<EventModel[]>{
    return this.http.get<EventModel[]>("/api/events/list");
  }

  saveEventImage(image: File, name: string): any{
    let formdata = new FormData();
    formdata.append("image", image, name);
    return this.http.post("/api/events/image", formdata);
  }

}
