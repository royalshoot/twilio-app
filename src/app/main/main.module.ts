import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {Routes, RouterModule} from '@angular/router';
import {ButtonModule} from 'primeng/button';

const routes:Routes = [
  {
    path:'',
    component:MainComponent
  },
  {
    path:'messaging',
    loadChildren: ()=>import('./messaging/messaging.module').then(m=>m.MessagingModule)
  }
];


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule.forChild(routes)
  ],
  providers:[]
})
export class MainModule { }
