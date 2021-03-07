import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagingComponent } from './messaging.component';
import {Routes, RouterModule} from '@angular/router';
import {ButtonModule} from 'primeng/button';
import { IndividualComponent } from './individual/individual.component';
import { BulkComponent } from './bulk/bulk.component';
import { ChatService } from 'src/services/chat.service';
import {BlockUIModule} from 'primeng/blockui';


const routes:Routes =[
  {
    path:'',
    component:MessagingComponent
  },
  {
    path:'individual',
    component: IndividualComponent
  }

];
@NgModule({
  declarations: [MessagingComponent, IndividualComponent, BulkComponent],
  imports: [
    CommonModule,
    ButtonModule,
    BlockUIModule,
    RouterModule.forChild(routes)
  ],
  providers:[ChatService]
})
export class MessagingModule { }
