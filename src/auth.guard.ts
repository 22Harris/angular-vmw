import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { CanActivate, Route, Router, UrlTree } from "@angular/router";
import { LocalStorageService } from "./app/authentications/services/localstorage.service";
import { isPlatformBrowser } from "@angular/common";


@Injectable({
    providedIn: 'root'
})
export class AuthGuardOnFinalLoginStudent implements CanActivate{

    constructor(
        private readonly localStorageService: LocalStorageService,
        private readonly router: Router,
        @Inject(PLATFORM_ID) private platformId: Object
    ){}

    canActivate(): boolean | UrlTree {
        if (!isPlatformBrowser(this.platformId)) {
            return this.router.createUrlTree(['/vms/initial-login-student']);
        }
        if(!this.localStorageService.getIMOnLocalStorage()){
            return this.router.createUrlTree(['/vms/initial-login-student']);
        }
        if(!this.localStorageService.getEmailOnLocalStorage()){
            return this.router.createUrlTree(['vms/initial-login-student']);
        }
        if(!this.localStorageService.getIdOnLocalStorage()){
            return this.router.createUrlTree(['vms/initial-login-student']);
        }
        return true;
    }

}


@Injectable({
    providedIn: 'root'
})
export class AuthGuardOnElectionCandidates implements CanActivate{

    constructor(
        private readonly localStorageService: LocalStorageService,
        private readonly router: Router,
        @Inject(PLATFORM_ID) private platformId: Object
    ){}
    canActivate(): boolean | UrlTree {
        if (!isPlatformBrowser(this.platformId)) {
            return this.router.createUrlTree(['/vms/initial-login-student']);
        }
        if(!this.localStorageService.getTokenOnLocalStorage()){
            return this.router.createUrlTree(['vms/initial-login-student']);
        }
        return true;

    }

}