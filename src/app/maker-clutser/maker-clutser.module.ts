import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakerClutserPageRoutingModule } from './maker-clutser-routing.module';

import { MakerClutserPage } from './maker-clutser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakerClutserPageRoutingModule
  ],
  declarations: [MakerClutserPage]
})
export class MakerClutserPageModule {}
