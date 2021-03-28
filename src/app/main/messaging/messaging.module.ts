import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagingComponent } from './messaging.component';
import {Routes, RouterModule} from '@angular/router';
import {ButtonModule} from 'primeng/button';
import { IndividualComponent } from './individual/individual.component';
import { BulkComponent } from './bulk/bulk.component';
import { ChatService } from 'src/services/chat.service';
import {BlockUIModule} from 'primeng/blockui';
import {TabViewModule} from 'primeng/tabview';
import { ManageGroupComponent } from './bulk/manage-group/manage-group.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import { GroupChatComponent } from './bulk/group-chat/group-chat.component';
import { BitlyLinkComponent } from './bulk/bitly-link/bitly-link.component';




const routes:Routes =[
  {
    path:'',
    component:MessagingComponent
  },
  {
    path:'individual',
    component: IndividualComponent
  },
  {
    path:'bulk',
    component: BulkComponent
  }

];
@NgModule({
  declarations: [MessagingComponent, IndividualComponent, BulkComponent, ManageGroupComponent, ManageGroupComponent, GroupChatComponent, BitlyLinkComponent],
  imports: [
    CommonModule,
    ButtonModule,
    BlockUIModule,
    TabViewModule,
    InputTextModule,
    TableModule,
    DialogModule,
    FormsModule,
    MultiSelectModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[ChatService]
})
export class MessagingModule { }
