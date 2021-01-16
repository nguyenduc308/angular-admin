import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from './shared/layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { ApiRequestInterceptor } from './shared/interceptors/api-request.intercepter';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, LayoutModule],
  declarations: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiRequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
