import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPageLayoutComponent } from './menu-page-layout.component';
import { By } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from 'src/app/services/login.service';

describe('MenuPageLayoutComponent', () => {
  let component: MenuPageLayoutComponent;
  let fixture: ComponentFixture<MenuPageLayoutComponent>;
  let service: LoginService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPageLayoutComponent ],
      imports: [
        NoopAnimationsModule,
        RouterTestingModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
      ],
      providers: [LoginService]
    })
    .compileComponents();
    service = TestBed.inject(LoginService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service.sair();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("o título renderizado deve ser igual ao definido no componente. utilizando querySelector", () => {
    let titulo: HTMLSpanElement = fixture.nativeElement.querySelector(
      "mat-toolbar > span"
    );
    expect(titulo.innerText).toContain(component.titulo);
  });

  it("o título renderizado deve ser igual ao definido no componente. utilizando classe da tag html.", () => {
    let titulo = fixture.debugElement.query(By.css(".titulo-site")).nativeElement;
    expect(titulo.innerText).toContain(component.titulo);
  });

  it('#sair', () => {
    let spy = spyOn(service, 'sair');
    component.sair();
    expect(spy).toHaveBeenCalled();
  });

});