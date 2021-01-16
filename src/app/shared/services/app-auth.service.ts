import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppAuthService {
  private _isAuth: boolean = false;

  get isAuth$(): Observable<boolean> {
    return of(this._isAuth);
  }
}
