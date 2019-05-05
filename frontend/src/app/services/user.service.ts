import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel, UserSafeModel} from "../models/user-model";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUserById(id: string):Observable<UserSafeModel>{
    return this.http.get<UserSafeModel>("/api/users/id/"+id);
  }
}
