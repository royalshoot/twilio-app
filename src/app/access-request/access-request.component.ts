import { Component, OnInit, TemplateRef } from '@angular/core';
import { SettingService } from 'src/services/setting.service';

declare var $: any;
@Component({
  selector: 'app-access-request',
  templateUrl: './access-request.component.html',
  styleUrls: ['./access-request.component.css']
})
export class AccessRequestComponent implements OnInit {
  public phonenumber:string;
  public doctordata:any;
  public detail:any;
  showmodelhtml = false;
  constructor(private settingService: SettingService) { }

  ngOnInit(): void {
    this.phonenumber= localStorage.getItem('PhoneNumber');
    this.getPatientdata();
  }

  showmodel(item){
    this.detail = item;    
    $('#DetailsModal').modal('show');
  }
 
  getPatientdata() {
    this.settingService.getdatabyPhoneNumber(this.phonenumber).subscribe((res:any)=>{
      if(res.success){
       this.doctordata= res.result;
        this.showmodelhtml = true;
      }
    })
  }
}
