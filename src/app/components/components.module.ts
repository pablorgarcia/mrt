import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { VideosListComponent } from './videos-list/videos-list.component';
import { PhotosListComponent } from './photos-list/photos-list.component';


@NgModule({
  declarations: [
    VideosListComponent,
    PhotosListComponent
  ],
  exports: [
    VideosListComponent,
    PhotosListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ComponentsModule {}
