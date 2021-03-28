import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/services/group.service';

@Component({
  selector: 'app-group-chat',
  templateUrl: './group-chat.component.html',
  styleUrls: ['./group-chat.component.css']
})
export class GroupChatComponent implements OnInit {
/**____________DECORATORS____________ */

  /**____________PARAMETERS____________ */
  groups: any[] = [];
  messages: any[] = [];
  textMessage: string = "";
  selectedClient!:number;
  blocked: boolean = false;

  /**____________CONSTRUCTORS__________ */
  constructor(private chatService: GroupService) { }
  /**____________LIFE CYCLE HOOKS______ */
  ngOnInit(): void {
    this.getGroups();
  }
  /**____________SERVICE FUNCTIONS_____ */
  getGroups(){
    this.blocked = true;
    this.chatService.getAllGroups().subscribe((res:any)=>{
      this.blocked = false;
      if(res.success){
        res.result.forEach(element => {
          element["active"] = false;
        });
        this.groups = res.result;

      }
    });
  }

  /**____________BASIC FUNCTIONS_______ */
  tapClient(client: any){
    this.selectedClient = client.groupId;
    this.groups.forEach(element => {
      element.active = false;
    });
    this.groups.filter(m=>m.groupId == client.groupId)[0].active = true;
    this.blocked = true;
    this.getGroupMessages();
  }

  getGroupMessages(){
    this.chatService.getGroupMessages(this.selectedClient).subscribe((res:any)=>{
      if(res.success){
        this.blocked = false;
        this.messages = res.result;
      }
    })
  }

  getNumbers(clients:any[]){
    let finalStr = [];
    clients.forEach(element => {
      finalStr.push(element.phoneNumber);
    });
    return finalStr.toString();
  }

  sendMessage(event:any){
    if(event){
      let obj = {
        clientId: 0,
        groupId: this.selectedClient, 
        body: event.value
      };
      event.value = "";
      this.blocked = true;
      this.chatService.sendGroupMessage(obj).subscribe((res:any)=>{
        this.blocked = false;
        if(res.success){
          this.getGroupMessages();
          this.messages.push(res.result);
        }
      });
    }
    else{
      alert('Please select any client to send message');
    }
  }
  /**____________SHARED FUNCTIONS______ */

}
