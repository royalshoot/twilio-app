import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {Routes, RouterModule} from '@angular/router';
import {ButtonModule} from 'primeng/button';
import { AppSettingComponent } from './app-setting/app-setting.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { BlockUIModule } from 'primeng/blockui';
import { SideNavigationComponent } from '../side-navigation/side-navigation.component';
import { TopNavigationComponent } from '../top-navigation/top-navigation.component';
import { AccessRequestComponent } from '../access-request/access-request.component';

const routes:Routes = [
  {
    path:'',
    component:MainComponent
  },
  {
    path:'app-setting',
    component: AppSettingComponent
  },
  {
    path:'messaging',
    loadChildren: ()=>import('./messaging/messaging.module').then(m=>m.MessagingModule)
  }
];


@NgModule({
  declarations: [MainComponent, AppSettingComponent,SideNavigationComponent,TopNavigationComponent,AccessRequestComponent],
  imports: [
    CommonModule,
    ButtonModule,
    BlockUIModule,
    InputTextModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[]
})
export class MainModule { }
