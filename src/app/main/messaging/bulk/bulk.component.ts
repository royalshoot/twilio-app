import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulk',
  templateUrl: './bulk.component.html',
  styleUrls: ['./bulk.component.css']
})
export class BulkComponent implements OnInit {
  showManageGroup: boolean = true;
  showGroupChat: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }


  tabChange(e: any) {
    debugger;
    if(e.index ==0){
      this.showManageGroup = false;
      setTimeout(() => {
        this.showManageGroup = true;
      }, 0);
    }else if(e.index == 1){
      this.showGroupChat = false;
      setTimeout(() => {
        this.showGroupChat = true;
      }, 0);
    }
  }

}
