import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorRoutingModule } from './administrator-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NovoComponent } from './livros/novo/novo.component';
import { UiModule } from '../ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DashboardComponent, NovoComponent],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    ReactiveFormsModule,
    UiModule
  ]
})
export class AdministratorModule { }
