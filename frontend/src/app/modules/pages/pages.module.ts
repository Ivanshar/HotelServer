import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import {SharedModule} from "../shared/shared.module";
import {IndividualModule} from "../individual/individual.module";
import { AboutComponent } from './components/about/about.component';
import { EventsComponent } from './components/events/events.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ConferenceComponent } from './components/conference/conference.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { ReviewComponent } from './components/review/review.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RoombookComponent } from './components/booking/roombook/roombook.component';
import { EventbookComponent } from './components/booking/eventbook/eventbook.component';
import { ConfbookComponent } from './components/booking/confbook/confbook.component';
import { UsersComponent } from './components/users/users.component';
import {RouterModule} from "@angular/router";
import { SignComponent } from './components/modal/sign/sign.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, EventsComponent, RegistrationComponent,
    ConferenceComponent, RoomsComponent, ReviewComponent, ProfileComponent, RoombookComponent,
    EventbookComponent, ConfbookComponent, UsersComponent, SignComponent],
  imports: [
    CommonModule,
    SharedModule,
    IndividualModule,
    RouterModule
  ],exports:[
    HomeComponent,
    AboutComponent,
    ConferenceComponent,
    EventsComponent,
    RoomsComponent,
    RegistrationComponent,
    ReviewComponent,
    ProfileComponent,
    RoombookComponent,
    EventbookComponent,
    ConfbookComponent,
    UsersComponent,
    SignComponent
      ]
})
export class PagesModule { }
