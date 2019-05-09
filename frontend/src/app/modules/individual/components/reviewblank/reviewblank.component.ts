import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {ReviewModel} from "../../../../models/review-model";
import {ReviewService} from "../../../../services/review.service";

@Component({
  selector: 'app-reviewblank',
  templateUrl: './reviewblank.component.html',
  styleUrls: ['./reviewblank.component.css']
})
export class ReviewblankComponent implements OnInit {

  public review: ReviewModel = new ReviewModel();

  constructor(private reviewService: ReviewService) { }

  rewiewControl: FormControl;
  numberControl: FormControl;
  emailControl: FormControl;
  ngOnInit() {
    this.numberControl = new FormControl('', Validators.compose([Validators.required,Validators.min(9999999)])) ;
    this.emailControl = new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ]));
    this.rewiewControl = new FormControl('', Validators.required);

    this.review.mark = 5;
  }

  public comment():void{
    this.reviewService.comment(this.review).subscribe(()=>{
      setTimeout(location.reload.bind(location), 200);
    })
  }
}

