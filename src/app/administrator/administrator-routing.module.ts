import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../infraestrutura/guards/auth.guard';
import { NovoComponent } from './livros/novo/novo.component';

const routes: Routes = [
  { 
    path: "",
    component: DashboardComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: "livros",
    canActivate: [ AuthGuard ],
    canActivateChild: [ AuthGuard ],
    children: [
      {
        path: "novo",
        component: NovoComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }
