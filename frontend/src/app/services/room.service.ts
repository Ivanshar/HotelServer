import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RoomModel} from "../models/room-model";
import {UserSafeModel} from "../models/user-model";

@Injectable()
export class RoomService {

  constructor(private http: HttpClient) { }

  public postAllRoom(room: RoomModel):Observable<any>{
    return this.http.post("/api/room", room );
  }

  public getAllRooms():Observable<RoomModel[]>{
    return this.http.get<RoomModel[]>("/api/room/list");
  }

}
