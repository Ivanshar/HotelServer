import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [HeaderComponent, NavigationComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],exports:[
    HeaderComponent,
    FooterComponent,
    NavigationComponent
  ]
})
export class SharedModule { }