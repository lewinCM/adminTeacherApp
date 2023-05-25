import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatDividerModule } from '@angular/material/divider';
import { NgChartsModule } from 'ng2-charts';
import { DonaComponent } from './dona/dona.component';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { PieCartComponent } from './pie-cart/pie-cart.component';

@NgModule({
  declarations: [
    DonaComponent,
    IncrementadorComponent,
    PieCartComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    FormsModule,
    MatDividerModule
  ],
  exports: [
    DonaComponent,
    IncrementadorComponent,
    PieCartComponent
  ]
})
export class ComponentsModule { }
