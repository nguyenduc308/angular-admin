import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppAuthService {
  private _isAuthSubject = new BehaviorSubject<boolean>(false);

  get isAuth$(): Observable<boolean> {
    return this._isAuthSubject.asObservable();
  }
  setAuth(isAuth: boolean): void {
    this._isAuthSubject.next(isAuth);
  }
}
