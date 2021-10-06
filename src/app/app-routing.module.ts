import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
{path:'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
{path:'blue', loadChildren: () => import('./pages/blue/blue.module').then(m => m.BlueModule)},
{path:'green', loadChildren: () => import('./pages/green/green.module').then(m => m.GreenModule)},
{path:'red', loadChildren: () => import('./pages/red/red.module').then(m => m.RedModule)},
{path:'yellow', loadChildren: () => import('./pages/yellow/yellow.module').then(m => m.YellowModule)}
];




@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
