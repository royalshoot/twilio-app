import { HttpHeaders } from "@angular/common/http";
import { LocalStorage } from "./global";

export class AppCommon{
    static baseUrl: string  = "https://twilio-app.vercel.app/";
    static getAccountId(){
        return new LocalStorage().get("accountId");
    }
    static getHttpHeader(){
        return new HttpHeaders().set("accountId", this.getAccountId());
    }
}
