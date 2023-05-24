import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProgressComponent } from './components/progress/progress.component';
import { Grafica1Component } from './components/grafica1/grafica1.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { P404Component } from './components/p404/p404.component';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    ProgressComponent,
    Grafica1Component,
    DashboardComponent,
    P404Component,
    PagesComponent


  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule,
    SharedModule

  ]
})
export class PagesModule { }
