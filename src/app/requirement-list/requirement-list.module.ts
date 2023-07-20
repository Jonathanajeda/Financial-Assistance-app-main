import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequirementListPageRoutingModule } from './requirement-list-routing.module';

import { RequirementListPage } from './requirement-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequirementListPageRoutingModule
  ],
  declarations: [RequirementListPage]
})
export class RequirementListPageModule {}
