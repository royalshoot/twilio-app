import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppCommon } from 'src/common/common';
import { LocalStorage } from 'src/common/global';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private http: HttpClient) {
    this.http = http;
  }
  getClients() {
    return this.http.get<any>(AppCommon.baseUrl + 'Client/GetAll', {
      headers: AppCommon.getHttpHeader()
    }).pipe(map(data => {
      return data;
    }));
  }

  getMessages(clientId: number) {
    return this.http.get<any>(AppCommon.baseUrl + `Client/${clientId}/Messages/GetAll`, {
      headers: AppCommon.getHttpHeader()
    }).pipe(map(data => {
      return data;
    }));
  }

  sendMessage(messageObj: any) {
    return this.http.post<any>(AppCommon.baseUrl + 'Message/Add', messageObj, {
      headers: AppCommon.getHttpHeader()
    }).pipe(
      map((data) => {
        return data;
      })
    );
  }

}
