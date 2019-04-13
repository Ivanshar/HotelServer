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

@NgModule({
  declarations: [FooterComponent, CarouselComponent, ServiceComponent, GalleryComponent, ResortComponent, BlogComponent, AboutinfoComponent],
  imports: [
    CommonModule
  ],exports:[
    CarouselComponent,
    ServiceComponent,
    BlogComponent,
    GalleryComponent,
    ResortComponent,
    ServiceComponent,
AboutinfoComponent
  ]
})
export class IndividualModule { }
