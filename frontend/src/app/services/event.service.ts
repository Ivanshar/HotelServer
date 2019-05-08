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
    return this.http.post("/api/event", event );
  }

  public getAllEvents():Observable<EventModel[]>{
    return this.http.get<EventModel[]>("/api/event/list");
  }


}
