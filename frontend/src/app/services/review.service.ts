import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ReviewModel} from "../models/review-model";

@Injectable()
export class ReviewService {

  constructor(private http: HttpClient) { }

  getLast3Comments():Observable<ReviewModel[]>{
    return this.http.get<ReviewModel[]>("/api/reviews/last");
  }

  getAll():Observable<ReviewModel[]>{
    return this.http.get<ReviewModel[]>("/api/reviews");
  }
}
