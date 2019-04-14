import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./modules/pages/components/home/home.component";
import {AboutComponent} from "./modules/pages/components/about/about.component";
import {RoomsComponent} from "./modules/pages/components/rooms/rooms.component";
import {EventsComponent} from "./modules/pages/components/events/events.component";
import {ConferenceComponent} from "./modules/pages/components/conference/conference.component";
import {ReviewComponent} from "./modules/pages/components/review/review.component";
import {RegistrationComponent} from "./modules/pages/components/registration/registration.component";
import {ProfileComponent} from "./modules/pages/components/profile/profile.component";
import {ConfbookComponent} from "./modules/pages/components/booking/confbook/confbook.component";
import {RoombookComponent} from "./modules/pages/components/booking/roombook/roombook.component";
import {EventbookComponent} from "./modules/pages/components/booking/eventbook/eventbook.component";
import {UsersComponent} from "./modules/pages/components/users/users.component";
import {SignComponent} from "./modules/pages/components/modal/sign/sign.component";

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'rooms', component:RoomsComponent},
  {path:'events', component:EventsComponent},
  {path:'conference', component:ConferenceComponent},
  {path:'review', component:ReviewComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'profile', component:ProfileComponent},
  {path:'roombook', component:RoombookComponent},
  {path:'eventbook', component:EventbookComponent},
  {path:'confbook', component:ConfbookComponent},
  {path:'users', component:UsersComponent},
  {path:'sign', component:SignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
