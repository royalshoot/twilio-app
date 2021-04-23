import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccessRequestComponent } from './access-request.component';


const routes:Routes = [
  {
    path:'',
    component:AccessRequestComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CustomerviewModule { }
