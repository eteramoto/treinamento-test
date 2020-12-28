import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPageLayoutComponent } from './ui/menu-page-layout/menu-page-layout.component';
import { AuthGuard } from './infraestrutura/guards/auth.guard';
import { ExemploComponent } from './exemplo/exemplo.component';

const routes: Routes = [
  {
    path: "",
    component: MenuPageLayoutComponent,
    children: [
      { 
        path: 'login', 
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule) 
      },
      {
        path: "admin",
        canActivateChild: [AuthGuard],
        loadChildren: () => 
          import("./administrator/administrator.module").then(
            m => m.AdministratorModule
          )
      },
      {
        path: 'exemplo',
        component: ExemploComponent
      }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
