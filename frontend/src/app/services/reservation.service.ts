import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ReservationModel} from "../models/reservation-model";
import {Observable} from "rxjs";
import {RoomModel} from "../models/room-model";
import {AuthService} from "./auth.service";

@Injectable()
export class ReservationService {

  constructor(private http: HttpClient,
              private auth:AuthService) { }

  public postReservation(reservation: ReservationModel):Observable<any>{
    return this.http.post("/api/reservations", reservation );
  }

  public getAllReservations():Observable<ReservationModel[]>{
    return this.http.get<ReservationModel[]>("/api/reservations/list/user/"+this.auth.user.id);
  }

}
