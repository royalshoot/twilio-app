import { HttpHeaders } from "@angular/common/http";
import { LocalStorage } from "./global";

export class AppCommon{
    static baseUrl: string  = "http://www.twilio.somee.com/";
    static getAccountId(){
        return new LocalStorage().get("accountId");
    }
    static getHttpHeader(){
        return new HttpHeaders().set("accountId", this.getAccountId());
    }
}
