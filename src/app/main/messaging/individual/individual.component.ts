import { Component, OnInit } from '@angular/core';
import { AppCommon } from 'src/common/common';
import { LocalStorage } from 'src/common/global';
import { ChatService } from 'src/services/chat.service';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit {
  /**____________DECORATORS____________ */

  /**____________PARAMETERS____________ */
  clients: any[] = [];
  messages: any[] = [];
  textMessage: string = "";
  selectedClient!:number;
  blocked: boolean = false;

  /**____________CONSTRUCTORS__________ */
  constructor(private chatService: ChatService) { }
  /**____________LIFE CYCLE HOOKS______ */
  ngOnInit(): void {
    this.getClients();
  }
  /**____________SERVICE FUNCTIONS_____ */
  getClients(){
    this.blocked = true;
    this.chatService.getClients().subscribe(res=>{
      this.blocked = false;
      if(res.success){
        res.result.forEach(element => {
          element["active"] = false;
        });
        this.clients = res.result;

      }
    });
  }

  /**____________BASIC FUNCTIONS_______ */
  tapClient(client: any){
    this.selectedClient = client.clientId;
    this.clients.forEach(element => {
      element.active = false;
    });
    this.clients.filter(m=>m.clientId == client.clientId)[0].active = true;
    this.blocked = true;
    this.chatService.getMessages(client.clientId).subscribe(res=>{
      this.blocked = false;
      if(res.success){
        this.messages = res.result;
      }
    })
  }
  sendMessage(event:any){
    if(event){
      let obj = {
        clientId: this.selectedClient,
        body: event.value
      };
      event.value = "";
      this.blocked = true;
      this.chatService.sendMessage(obj).subscribe(res=>{
        this.blocked = false;
        if(res.success){
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
