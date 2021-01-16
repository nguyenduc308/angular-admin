import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LayoutNoSidebarComponent } from './layout-no-sidebar/layout-no-sidebar.component';

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [HeaderComponent, LayoutNoSidebarComponent],
  exports: [HeaderComponent, LayoutNoSidebarComponent],
})
export class LayoutModule {}
