import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bookroomcontent',
  templateUrl: './bookroomcontent.component.html',
  styleUrls: ['./bookroomcontent.component.css']
})
export class BookroomcontentComponent implements OnInit {
  @Input() public  roomType: string;

  constructor() { }

  ngOnInit() {
  }

}
