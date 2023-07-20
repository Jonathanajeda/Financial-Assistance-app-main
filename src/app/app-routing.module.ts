import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ProtectedPageComponent } from './protected-page/protected-page.component'; // Import the ProtectedPageComponent


const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  { 
    path: 'landing', 
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  { 
    path: 'protected-page', 
    component: ProtectedPageComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'home', 
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin-interface',
    loadChildren: () => import('./admin-interface/admin-interface.module').then( m => m.AdminInterfacePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'requirement-list',
    loadChildren: () => import('./requirement-list/requirement-list.module').then( m => m.RequirementListPageModule)
  },
  {
    path: 'upload',
    loadChildren: () => import('./upload/upload.module').then( m => m.UploadPageModule)
  },
  {
    path: 'view-info',
    loadChildren: () => import('./view-info/view-info.module').then( m => m.ViewInfoPageModule)
  },
  {
    path: 'personal-info',
    loadChildren: () => import('./personal-info/personal-info.module').then( m => m.PersonalInfoPageModule)
  },
  {
    path: 'submitted-data',
    loadChildren: () => import('./submitted-data/submitted-data.module').then( m => m.SubmittedDataPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
