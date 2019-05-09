import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RoomModel} from "../models/room-model";
import {UserSafeModel} from "../models/user-model";
import {ReservationModel} from "../models/reservation-model";

@Injectable()
export class RoomService {

  constructor(private http: HttpClient) { }

  public postAllRoom(room: RoomModel):Observable<any>{
    return this.http.post("/api/rooms", room );
  }

  public ifRoomExistsById(id: string): Observable<boolean>{
    return this.http.get<boolean>("/api/rooms/id/"+id);
  }

  public getAllRooms():Observable<RoomModel[]>{
    return this.http.get<RoomModel[]>("/api/rooms/list");
  }

  public getRequiredRoom(room: RoomModel):Observable<RoomModel>{
    return this.http.post<RoomModel>("/api/rooms/req", room);
  }

}
