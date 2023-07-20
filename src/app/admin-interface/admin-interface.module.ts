import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { AdminInterfacePage } from './admin-interface.page';

import { AdminInterfacePageRoutingModule } from './admin-interface-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminInterfacePageRoutingModule,
    HttpClientModule
  ],
  declarations: [AdminInterfacePage],
})
export class AdminInterfacePageModule {}
