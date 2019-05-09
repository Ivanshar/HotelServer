import { Component, OnInit } from '@angular/core';
import {ReviewService} from "../../../../services/review.service";
import {ReviewModel} from "../../../../models/review-model";
import {AuthService} from "../../../../services/auth.service";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  private reviews: ReviewModel[];
  private reviewsExist: boolean;

  public alreadyReviewed: boolean = false;
  public canComment: boolean = false;

  constructor(private revService: ReviewService,
              public auth: AuthService) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData():void{
    this.revService.getAll().subscribe(data=>{
      this.reviews = data as ReviewModel[];
      if(this.reviews.length != 0){
        this.reviewsExist = true;
      }
      this.revService.isCommented().subscribe(data=>{
        this.alreadyReviewed = data;

        this.revService.canComment().subscribe(data1=>{
          this.canComment = data1;
        })
      })
    })
  }

}
