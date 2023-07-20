import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmittedDataPageRoutingModule } from './submitted-data-routing.module';

import { SubmittedDataPage } from './submitted-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmittedDataPageRoutingModule
  ],
  declarations: [SubmittedDataPage]
})
export class SubmittedDataPageModule {}
