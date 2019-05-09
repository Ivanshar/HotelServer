import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../services/auth.service";

@Component({
  selector: 'app-roomcards',
  templateUrl: './roomcards.component.html',
  styleUrls: ['./roomcards.component.css']
})
export class RoomcardsComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
