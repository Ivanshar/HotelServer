import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import {RouterModule} from "@angular/router";
import { AdminheaderComponent } from './components/adminheader/adminheader.component';

import { PaymantmodalComponent } from './components/paymantmodal/paymantmodal.component';
import {UserService} from "../../services/user.service";
import {AuthService} from "../../services/auth.service";
import {AuthInterceptorService} from "../../services/auth-interceptor.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [HeaderComponent, NavigationComponent, FooterComponent, AdminheaderComponent, PaymantmodalComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],exports:[
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    AdminheaderComponent,
    PaymantmodalComponent,
    AdminheaderComponent
  ],
  providers:[
    UserService,
    AuthService,
    AuthInterceptorService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ]
})
export class SharedModule { }
