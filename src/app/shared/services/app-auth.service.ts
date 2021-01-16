import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {
  ETokenStatus,
  IVerifyTokenResponse,
} from '../interfaces/http-response';

@Injectable({
  providedIn: 'root',
})
export class AppAuthService {
  private _isAuthSubject = new BehaviorSubject<boolean>(false);

  constructor(private readonly _http: HttpClient) {}

  get isAuth$(): Observable<boolean> {
    return this._isAuthSubject.asObservable();
  }
  setAuth(isAuth: boolean): void {
    this._isAuthSubject.next(isAuth);
  }

  requestVerifyToken(): Observable<IVerifyTokenResponse> {
    return this._http
      .get<IVerifyTokenResponse>('/auth/verify', {
        withCredentials: true,
      })
      .pipe(
        tap((res) => {
          this.setAuth(res.code === ETokenStatus.VALID);
          console.log(res.code === ETokenStatus.VALID);
        }),
        catchError((err) => {
          this.setAuth(false);
          return of(err);
        })
      );
  }
}
