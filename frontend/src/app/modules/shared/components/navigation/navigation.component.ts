import { Component, OnInit } from '@angular/core';
import {UserModel} from "../../../../models/user-model";
import {AuthService} from "../../../../services/auth.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public loginUser:UserModel = new UserModel();
  public isAdmin: boolean = false;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  public onSubmit():void{
    this.auth.signIn(this.loginUser);
    if(this.auth.user.role == 1) this.isAdmin = true;
  }

  public logOut():void{
    this.auth.logOut();
  }

}
