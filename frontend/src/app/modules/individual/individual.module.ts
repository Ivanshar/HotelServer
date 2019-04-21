import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import {HomeComponent} from "../pages/components/home/home.component";
import { ServiceComponent } from './components/service/service.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ResortComponent } from './components/resort/resort.component';
import { BlogComponent } from './components/blog/blog.component';
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
import {ReductprofComponent} from "../pages/components/reductprof/reductprof.component";
import { FastbookviewComponent } from './components/fastbookview/fastbookview.component';
import { PaymantcardComponent } from './components/paymantcard/paymantcard.component';
import { ConfcardsComponent } from './components/confcards/confcards.component';
import { BookroomcontentComponent } from './components/bookroomcontent/bookroomcontent.component';

@NgModule({
  declarations: [FooterComponent, CarouselComponent, ServiceComponent, GalleryComponent, ResortComponent, BlogComponent, AboutinfoComponent, RoomcardsComponent, EventcardsComponent, ConferencecardComponent, ReviewblankComponent, ReviewcardComponent, RegistrblankComponent, ProfileviewComponent, BooklistComponent, ReductprofviewComponent, FastbookviewComponent, PaymantcardComponent, ConfcardsComponent, BookroomcontentComponent],
  imports: [
    CommonModule,
    RouterModule
  ],exports:[
    CarouselComponent,
    ServiceComponent,
    BlogComponent,
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
    PaymantcardComponent,
    BookroomcontentComponent
  ]
})
export class IndividualModule { }
