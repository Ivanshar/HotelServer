import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private http:HttpClient){

  }

  getUser():void{
    this.http.get("/api/user/login/root").subscribe(value => {
      console.log(value)
    })
  }
}
