import { Component, OnInit } from '@angular/core';
import {ReviewService} from "../../../../services/review.service";
import {ReviewModel} from "../../../../models/review-model";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  private reviews: ReviewModel[];
  private reviewsExist: boolean;

  constructor(private revService: ReviewService) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData():void{
    this.revService.getAll().subscribe(data=>{
      this.reviews = data as ReviewModel[];
      if(this.reviews.length != 0){
        this.reviewsExist = true;
      }
    })
  }

}
