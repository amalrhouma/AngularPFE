import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    DefaultComponent ,
    DashboardComponent
  ]
})
export class DefaultModule { }
