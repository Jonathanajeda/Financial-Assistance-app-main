import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequirementListPage } from './requirement-list.page';

const routes: Routes = [
  {
    path: '',
    component: RequirementListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequirementListPageRoutingModule {}
