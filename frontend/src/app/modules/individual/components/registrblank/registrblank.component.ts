import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {UserModel} from "../../../../models/user-model";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../../services/auth.service";
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-registrblank',
  templateUrl: './registrblank.component.html',
  styleUrls: ['./registrblank.component.css']
})
export class RegistrblankComponent implements OnInit {


  firstnameControl: FormControl;
  secondnameControl: FormControl;
  numberControl: FormControl;
  passwordControl: FormControl;
  dateControl: FormControl;
  emailControl: FormControl;

  public newUser: UserModel = new UserModel();
  public isAdmin: boolean = false;
  public userExistsByEmail: boolean = false;
  public userExistsByLogin: boolean = false;

  constructor(private userService: UserService,
              private router: Router,
              private auth: AuthService) {

  }

  ngOnInit() {
    this.firstnameControl = new FormControl('', Validators.required);
    this.secondnameControl = new FormControl('', Validators.required);
    this.numberControl = new FormControl('', Validators.compose([Validators.required,Validators.min(9999999)])) ;
    this.passwordControl = new FormControl('', Validators.compose([Validators.required,Validators.minLength(8)]));
    this.dateControl = new FormControl('');
    this.emailControl = new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ]));
  }

  public regNewUser():void{
    if(!this.userExistsByEmail && !this.userExistsByLogin){
      this.newUser.logoUrl = "default-logo.jpg";
      if(this.isAdmin){
        this.newUser.role = 1;
      }else {
        this.newUser.role = 0;
      }
      this.auth.signUp(this.newUser);
    }
  }

  public ifExistsByEmail(email: string):void{
    if(email != undefined) this.userService.findUserByEmail(email).subscribe((exists)=>{
      if(exists) {
        this.userExistsByEmail = true;
      }
    });
  }

  public ifExistsByLogin(login: string):void{
    if(login != undefined) this.userService.findUserByLogin(login).subscribe((exists)=>{
      if(exists) {
        this.userExistsByLogin = true;
      }
    })
  }

}
