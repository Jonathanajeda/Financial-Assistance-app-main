import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmittedDataPage } from './submitted-data.page';

const routes: Routes = [
  {
    path: '',
    component: SubmittedDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmittedDataPageRoutingModule {}
