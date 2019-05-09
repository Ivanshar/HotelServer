import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ReviewModel} from "../models/review-model";
import {AuthService} from "./auth.service";

@Injectable()
export class ReviewService {

  constructor(private http: HttpClient,
              private auth: AuthService) { }

  getLast3Comments():Observable<ReviewModel[]>{
    return this.http.get<ReviewModel[]>("/api/reviews/last");
  }

  getAll():Observable<ReviewModel[]>{
    return this.http.get<ReviewModel[]>("/api/reviews");
  }

  isCommented(): Observable<boolean>{
    return this.http.get<boolean>("/api/reviews/user/"+this.auth.user.id);
  }

  comment(review: ReviewModel):Observable<boolean>{
    return this.http.post<boolean>("/api/reviews/user/"+this.auth.user.id,review);
  }

  canComment():Observable<boolean>{
    return this.http.get<boolean>("/api/reviews/available/user/"+this.auth.user.id);
  }
}
