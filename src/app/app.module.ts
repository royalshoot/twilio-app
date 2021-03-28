import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LocalStorage } from 'src/common/global';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

new LocalStorage().set("accountId","1");

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=>import('../app/auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'main',
    loadChildren: ()=>import('../app/main/main.module').then(m=>m.MainModule)
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
