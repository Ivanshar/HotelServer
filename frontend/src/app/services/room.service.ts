import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RoomModel} from "../models/room-model";

@Injectable()
export class RoomService {

  constructor(private http: HttpClient) { }


}
