import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { HomeComponent } from '../pages/home/home.component';
import { TeamComponent } from '../pages/team/team.component';
import { ChampionshipsComponent } from '../pages/championships/championships.component';

import { ProfileComponent } from '../pages/profile/profile.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/mancos',
    pathMatch: 'full' // home
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'mancos',
        component: HomeComponent // home
      },
      {
        path: 'racing',
        component: ChampionshipsComponent // championships
      },
      {
        path: 'team',
        component: TeamComponent
      },
      {
        path: 'team/:id',
        component: ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
