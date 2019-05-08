import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-registrblank',
  templateUrl: './registrblank.component.html',
  styleUrls: ['./registrblank.component.css']
})
export class RegistrblankComponent implements OnInit {

  constructor() { }
  firstnameControl: FormControl;
  secondnameControl: FormControl;
  numberControl: FormControl;
  passwordControl: FormControl;
  dateControl: FormControl;
  emailControl: FormControl;
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


}
