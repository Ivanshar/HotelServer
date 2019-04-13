import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {HomeComponent} from "../pages/components/home/home.component";
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, NavigationComponent, FooterComponent],
  imports: [
    CommonModule
  ],exports:[
    HeaderComponent,
    FooterComponent,
    NavigationComponent
  ]
})
export class SharedModule { }
