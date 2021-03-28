import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GroupService } from 'src/services/group.service';

@Component({
  selector: 'app-manage-group',
  templateUrl: './manage-group.component.html',
  styleUrls: ['./manage-group.component.css']
})
export class ManageGroupComponent implements OnInit {
  groups!: any[];
  showAddGroup: boolean = false;
  clients!: any[];

  
  groupForm!: FormGroup;
  constructor(private groupService: GroupService,
    private fb: FormBuilder) {
      this.groupForm = this.fb.group({
        groupName: ['',Validators.required],
        clientIds:['']
      });
  }

  ngOnInit(): void {
    this.getGroups();
    this.getClients();
    
  }

  getGroups() {
    this.groupService.getAllGroups().subscribe((res:any) => {
      if(res.success){
        if(res.result.length>0){
          this.groups = res.result;
        }
      }else{
        console.error(res.exception)
      }
    }, (err) => {
      console.error(err);
    })
  }
  getClients(){
    this.groupService.getClientShort().subscribe((res:any)=>{
      if(Array.isArray(res.result) && res.result.length >0){
        this.clients = res.result;
      }
    },(err)=>{console.error(err);})
  }
  addGroup(){
    let obj = this.groupForm.value;
    this.groupService.addGroup(obj).subscribe((res:any)=>{
      if(res.success){
        this.groupForm.reset();
        this.getGroups();
        this.showAddGroup = false;
      }else{
        console.error(res.exception);
      }
    },(err)=>{
      console.error(err);
    });
  }

  get groupName(){
    return this.groupForm.get('groupName');
  }
  

  cancelAddGroup(){
    this.showAddGroup = false;
  }

  removeGroup(groupId: number){
    let con = confirm("Are you sure you want to delete ?");
    if(con){
      this.groupService.deleteGroup(groupId).subscribe((res:any)=>{
        if(res.success){
          this.getGroups();
        }else{
          console.log(res.exception);
        }
      });
    }
  }


  addGroupShow(){
    this.showAddGroup = true;
  }



}
