import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { HomeComponent } from '../../pages/home/home.component';
import { TeamComponent } from '../../pages/team/team.component';
import { ChampionshipsComponent } from '../../pages/championships/championships.component';

// Lo cargo aquí o hago un routing para "Driver list" ??????
import { ProfileComponent } from '../../pages/profile/profile.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'team',
        component: TeamComponent
      },
      { // LO DEJO AQUÍ O CREO UN DRIVER LIST ROUTING ??????
        path: 'team/:id',
        component: ProfileComponent
      },
      {
        path: 'championships',
        component: ChampionshipsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
