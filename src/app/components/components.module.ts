import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DonaComponent } from './dona/dona.component';
import { IncrementadorComponent } from './incrementador/incrementador.component';



@NgModule({
  declarations: [
    DonaComponent,
    IncrementadorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DonaComponent,
    IncrementadorComponent
  ]
})
export class ComponentsModule { }
