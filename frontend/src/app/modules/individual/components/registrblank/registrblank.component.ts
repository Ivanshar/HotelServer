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
  ngOnInit() {
    this.firstnameControl = new FormControl('', Validators.required);
    this.secondnameControl = new FormControl('', Validators.required);
    this.numberControl = new FormControl('', Validators.min(9999999));
    this.numberControl = new FormControl('', Validators.required);
    this.passwordControl = new FormControl('', Validators.min(9999999));
    this.passwordControl = new FormControl('', Validators.required);
    this.dateControl = new FormControl('')
  }


}
