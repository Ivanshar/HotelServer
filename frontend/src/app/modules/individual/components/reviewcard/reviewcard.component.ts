import {Component, Input, OnInit} from '@angular/core';
import {ReviewModel} from "../../../../models/review-model";

@Component({
  selector: 'app-reviewcard',
  templateUrl: './reviewcard.component.html',
  styleUrls: ['./reviewcard.component.css']
})
export class ReviewcardComponent implements OnInit {
  @Input() public reviews: ReviewModel;

  constructor() { }

  ngOnInit() {
  }

}
