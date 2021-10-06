import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RedComponent } from './red/red.component';
import { BlueComponent } from './blue/blue.component';
import { GreenComponent } from './green/green.component';
import { YellowComponent } from './yellow/yellow.component';



@NgModule({
  declarations: [
    HomeComponent,
    RedComponent,
    BlueComponent,
    GreenComponent,
    YellowComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    RedComponent,
    BlueComponent,
    GreenComponent,
    YellowComponent
  ]
})
export class PagesModule { }
