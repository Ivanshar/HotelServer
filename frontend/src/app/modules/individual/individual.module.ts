import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ServiceComponent } from './components/service/service.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ResortComponent } from './components/resort/resort.component';
import { AboutinfoComponent } from './components/aboutinfo/aboutinfo.component';
import { RoomcardsComponent } from './components/roomcards/roomcards.component';
import {RouterModule} from "@angular/router";
import { EventcardsComponent } from './components/eventcards/eventcards.component';
import { ConferencecardComponent } from './components/conferencecard/conferencecard.component';
import { ReviewblankComponent } from './components/reviewblank/reviewblank.component';
import { ReviewcardComponent } from './components/reviewcard/reviewcard.component';
import { RegistrblankComponent } from './components/registrblank/registrblank.component';
import { ProfileviewComponent } from './components/profileview/profileview.component';
import { BooklistComponent } from './components/booklist/booklist.component';
import { ReductprofviewComponent } from './components/reductprofview/reductprofview.component';
import { FastbookviewComponent } from './components/fastbookview/fastbookview.component';
import { BookroomcontentComponent } from './components/bookroomcontent/bookroomcontent.component';
import { BookeventcontentComponent } from './components/bookeventcontent/bookeventcontent.component';
import { BookconfcontentComponent } from './components/bookconfcontent/bookconfcontent.component';
import { AddroomblankComponent } from './components/admin/addroomblank/addroomblank.component';
import { AddeventblankComponent } from './components/admin/addeventblank/addeventblank.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptorService} from "../../services/auth-interceptor.service";
import {UserService} from "../../services/user.service";
import {SharedModule} from "../shared/shared.module";
import { BlogComponent } from './components/blog/blog.component';

@NgModule({
  declarations: [FooterComponent, CarouselComponent, ServiceComponent, GalleryComponent, ResortComponent,
    AboutinfoComponent, RoomcardsComponent, EventcardsComponent, ConferencecardComponent, ReviewblankComponent,
    ReviewcardComponent, RegistrblankComponent, ProfileviewComponent, BooklistComponent, ReductprofviewComponent,
    FastbookviewComponent, BookroomcontentComponent, BookeventcontentComponent,
    BookconfcontentComponent,
    AddroomblankComponent,
    AddeventblankComponent,
    BlogComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],exports:[
    CarouselComponent,
    ServiceComponent,
    GalleryComponent,
    ResortComponent,
    ServiceComponent,
    RoomcardsComponent,
    EventcardsComponent,
    AboutinfoComponent,
    ConferencecardComponent,
    ReviewblankComponent,
    ReviewcardComponent,
    RegistrblankComponent,
    ProfileviewComponent,
    BooklistComponent,
    ReductprofviewComponent,
    FastbookviewComponent,
    BookroomcontentComponent,
    BookeventcontentComponent,
    BookconfcontentComponent,
    AddroomblankComponent,
    AddeventblankComponent,
    BlogComponent
  ],
  providers:[
    UserService,
    AuthService,
    AuthInterceptorService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ]
})
export class IndividualModule { }
