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

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  public onSubmit():void{
    console.log(this.loginUser);
    this.auth.signIn(this.loginUser);
  }

}
