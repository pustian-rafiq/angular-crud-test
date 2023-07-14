import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
  declarations: [LayoutComponent],
  exports: [FormsModule, ReactiveFormsModule, MaterialModule],
})
export class SharedModule {}
