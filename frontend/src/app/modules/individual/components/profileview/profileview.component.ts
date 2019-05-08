import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../services/auth.service";
import {UserService} from "../../../../services/user.service";
import {UserModel} from "../../../../models/user-model";

@Component({
  selector: 'app-profileview',
  templateUrl: './profileview.component.html',
  styleUrls: ['./profileview.component.css']
})
export class ProfileviewComponent implements OnInit {

  public userInfo: UserModel;
  public loaded: boolean = false;

  constructor(public auth: AuthService,
              public userService: UserService) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData():void{
    this.userService.getUserById(this.auth.user.id).subscribe(data=>{
      this.userInfo = data;
      this.loaded = true;
    });
  }

}
