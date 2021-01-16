import { ROUTING_MAP } from '@/constants/routing';
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppAuthService } from '../services/app-auth.service';

@Injectable({
  providedIn: 'root',
})
export class UnAuthGuard implements CanLoad {
  constructor(
    private readonly _appAuthService: AppAuthService,
    private readonly _router: Router
  ) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this._appAuthService.isAuth$.pipe(
      map((isAuth) => {
        if (isAuth) {
          return this._router.createUrlTree([ROUTING_MAP.home.root]);
        }
        return true;
      })
    );
  }
}
