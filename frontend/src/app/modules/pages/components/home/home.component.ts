import { Component, OnInit } from '@angular/core';
import {ReviewService} from "../../../../services/review.service";
import {ReviewModel} from "../../../../models/review-model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadData();
  }

  public loadData():void{
  }

}
