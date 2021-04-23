import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LocalStorage } from 'src/common/global';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { AccessRequestComponent } from './access-request/access-request.component';
import { ModalModule } from 'ngx-bootstrap/modal';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=>import('../app/auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'main',
    loadChildren: ()=>import('../app/main/main.module').then(m=>m.MainModule)
  },
  {
    path:'access-request',
    loadChildren: ()=>import('../app/access-request/access-request.module').then(m=>m.CustomerviewModule)
  },
];

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
