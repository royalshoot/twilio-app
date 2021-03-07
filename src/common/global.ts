import { Injectable } from "@angular/core";

export class LocalStorage{
    get(key:string){
        return localStorage.getItem(key);
    }
    set(key:string, value:string){
        localStorage.setItem(key,value);
    }
    remove(key:string){
        localStorage.removeItem(key);
    }
}