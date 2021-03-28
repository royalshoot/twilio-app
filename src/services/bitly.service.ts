import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BitlyService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  shortenLink(fullUrl: string) {
    let url = "https://api-ssl.bitly.com/v4/shorten";
    let obj = {
      long_url: fullUrl,
      domain: 'bit.ly'
    }
    var _headers = {
      'Authorization': 'Bearer 225f9bb94b7e0f38cc929ac3cf7df5cca1b24a24',
      'Content-Type': 'application/json'
    };
    return this.http.post(url, obj, { headers: _headers }).pipe(
      map(res => {
        return res;
      })
    )
  }

}
