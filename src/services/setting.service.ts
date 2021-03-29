import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AppCommon } from 'src/common/common';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getSettings(){
    let url = AppCommon.baseUrl+"App/Settings/Get";
    return this.http.get(url).pipe(
      map(res=>{
        return res;
      })
    );
  }

  updateSettings(settingObj:  any){
    let url = AppCommon.baseUrl+"App/Settings/Update";
    return this.http.post(url,settingObj).pipe(
      map(res=>{
        return res;
      })
    );
  }
}
