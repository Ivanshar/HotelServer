import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-roombook',
  templateUrl: './roombook.component.html',
  styleUrls: ['./roombook.component.css']
})
export class RoombookComponent implements OnInit {

  private roomType: string;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loadInfo();
  }

  public loadInfo():void{
    const type = this.activeRoute.snapshot.params['type'];
    if(type){
      switch (type) {
        case "cr":{
          this.roomType = "Classic Room";
          break;
        }
        case "crv":{
          this.roomType = "Classic Riverside View";
          break;
        }
        case "hs":{
          this.roomType = "Hospitality Suite";
          break;
        }
        case "pms":{
          this.roomType = "Premium Suite";
          break;
        }
        case "ls":{
          this.roomType = "Luxury Suite";
          break;
        }
        case "pds":{
          this.roomType = "Presidential Suite";
          break;
        }
      }
    }


  }

}
