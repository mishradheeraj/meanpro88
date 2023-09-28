import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from 'src/app/navbar/navbar.component';






@NgModule({
  declarations: [
    LandingpageComponent,
    NavbarComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,

    
    
  ]
})
export class DashboardModule { }
