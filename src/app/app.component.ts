import { Component, OnInit } from '@angular/core';
import { AppAuthService } from './shared/services/app-auth.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  constructor(private readonly _appAuthService: AppAuthService) {}
  ngOnInit() {
    this._appAuthService.requestVerifyToken().subscribe();
  }
}
