import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from './shared/layout/layout.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, LayoutModule, AppRoutingModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
