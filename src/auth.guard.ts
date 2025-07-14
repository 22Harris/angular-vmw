import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { LocalStorageService } from "./app/authentications/services/localstorage.service";
import { Router } from "express";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{

    constructor(
        private readonly localStorageService: LocalStorageService,
        private readonly router: Router
    ){}

    canActivate(): boolean{
        if(this.localStorageService.getTokenOnLocalStorage()){
            return true;
        }else{
            return false;
        }
    }
}