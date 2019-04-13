import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import {SharedModule} from "../shared/shared.module";
import {IndividualModule} from "../individual/individual.module";
import { AboutComponent } from './components/about/about.component';
import { EventsComponent } from './components/events/events.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ConferenceComponent } from './components/conference/conference.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, EventsComponent, RegistrationComponent, ConferenceComponent],
  imports: [
    CommonModule,
    SharedModule,
    IndividualModule
  ],exports:[
    HomeComponent
  ]
})
export class PagesModule { }
