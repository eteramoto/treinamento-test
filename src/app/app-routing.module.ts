import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPageLayoutComponent } from './ui/menu-page-layout/menu-page-layout.component';

const routes: Routes = [
  {
    path: "",
    component: MenuPageLayoutComponent,
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
