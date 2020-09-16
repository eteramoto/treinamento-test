import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-menu-page-layout',
  templateUrl: './menu-page-layout.component.html',
  styleUrls: ['./menu-page-layout.component.scss']
})
export class MenuPageLayoutComponent {

  titulo = "Hello Test";

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) { }

}