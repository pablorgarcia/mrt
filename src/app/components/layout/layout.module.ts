import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { PagesModule } from '../../pages/pages.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DriversListComponent } from './drivers-list/drivers-list.component';
import { VideosListComponent } from './videos-list/videos-list.component';
import { PhotosListComponent } from './photos-list/photos-list.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    DriversListComponent,
    VideosListComponent,
    PhotosListComponent
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    PagesModule
  ]
})
export class LayoutModule {}
