import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakerClutserPage } from './maker-clutser.page';

const routes: Routes = [
  {
    path: '',
    component: MakerClutserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakerClutserPageRoutingModule {}
