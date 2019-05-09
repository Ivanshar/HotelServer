import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-reviewblank',
  templateUrl: './reviewblank.component.html',
  styleUrls: ['./reviewblank.component.css']
})
export class ReviewblankComponent implements OnInit {

  constructor() { }

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
  }
}

