import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AppCommon } from 'src/common/common';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  constructor(private http: HttpClient) {
    this.http = http;
  }

  getAllGroups() {
    let url = AppCommon.baseUrl + "Group/GetAll";
    return this.http.get(url).pipe(
      map(res => {
        return res;
      })
    )
  }

  getClientShort() {
    let url = AppCommon.baseUrl + "Client/GetAllShort";
    return this.http.get(url).pipe(
      map(res => {
        return res;
      })
    )
  }

  addGroup(group: any) {
    let url = AppCommon.baseUrl + "Group/Add";
    return this.http.post(url, group).pipe(
      map(res => {
        return res;
      })
    )
  }


  deleteGroup(groupId: number) {
    let url = AppCommon.baseUrl + `Group/${groupId}/Delete`;
    return this.http.delete(url).pipe(
      map(res => {
        return res;
      })
    )
  }


  getGroupMessages(groupId: number) {
    let url = AppCommon.baseUrl + `Group/${groupId}/Message/GetAll`;
    return this.http.get(url).pipe(
      map(res => {
        return res;
      })
    )
  }

  sendGroupMessage(obj: any) {
    let url = AppCommon.baseUrl + `Group/Message/Add`;
    return this.http.post(url, obj, {
      headers: AppCommon.getHttpHeader()
    }).pipe(
      map(res => {
        return res;
      })
    )
  }

}
