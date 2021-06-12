import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { PagesModule } from '../pages/pages.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DriversListComponent } from './drivers-list/drivers-list.component';
import { VideoListComponent } from './video-list/video-list.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    DriversListComponent,
    FooterComponent,
    VideoListComponent
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