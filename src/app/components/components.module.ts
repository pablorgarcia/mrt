import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { VideosListComponent } from './videos-list/videos-list.component';
import { SponsorsListComponent } from './sponsors-list/sponsors-list.component';
import { PhotosListComponent } from './photos-list/photos-list.component';


@NgModule({
  declarations: [
    VideosListComponent,
    SponsorsListComponent,
    PhotosListComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    VideosListComponent,
    SponsorsListComponent,
    PhotosListComponent,
  ]
})
export class ComponentsModule {}
