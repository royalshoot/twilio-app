import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SettingService } from 'src/services/setting.service';

@Component({
  selector: 'app-app-setting',
  templateUrl: './app-setting.component.html',
  styleUrls: ['./app-setting.component.css']
})
export class AppSettingComponent implements OnInit {
  blocked:boolean =false;
  settingForm!: FormGroup;
  constructor(private settingService: SettingService, private fb: FormBuilder) {
    this.settingForm = fb.group({
      appSettingId: [0],
      defaultMessage: ['', Validators.required],
      delayMinutes: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getSettings();
  }
  get defaultMessage(){
    return this.settingForm.get('defaultMessage');
  }
  get delayMinutes(){
    return this.settingForm.get('delayMinutes');
  }

  getSettings() {
    this.blocked = true;
    this.settingService.getSettings().subscribe((res: any) => {
      this.blocked =false;
      if (res.success) {
        this.settingForm.patchValue(res.result);
      } else {
        alert('error occured please see console');
        console.error(res.exception);
      }
    })
  }

  saveSettings() {
    this.blocked = true;
    let obj = this.settingForm.value;
    this.settingService.updateSettings(obj).subscribe((res: any) => {
      this.blocked = false;
      if (res.success) {
        alert("Setting saved successfully.");
      } else {
        alert('An error occured, please see console');
        console.error(res.exception);
      }
    })

  }

}
