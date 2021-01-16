import { AppAuthService } from '@/shared/services/app-auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginRequest } from './login/login.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly _appAuthService: AppAuthService,
    private readonly _http: HttpClient
  ) {}
  login(credentials: ILoginRequest): Observable<any> {
    return this._http.post('/auth/login', credentials);
  }
}
