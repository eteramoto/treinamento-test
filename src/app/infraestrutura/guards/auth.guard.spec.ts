import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { LoginService, Usuario } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let routeMock: any = { snapshot: {} };
  let routeStateMock: any = { snapshot: {}, url: '/admin'};
  let routerMock = {navigate: jasmine.createSpy('navigate')}
  let loginService: LoginService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard, 
        LoginService,
        { provide: Router, useValue: routerMock },
      ],
      imports: [
        RouterTestingModule
      ]
    });
    guard = TestBed.inject(AuthGuard);
    loginService = TestBed.get(LoginService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('deve redirecionar os usuários não autenticados quando tentam acessar a rota', () => {
    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(false);
    expect(routerMock.navigate).toHaveBeenCalledWith(['/login']);
  });
 
  it('deve permitir acessar a rota', () => {
    loginService.autenticar(new Usuario({login: 'log', senha: 'se'}));
    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(true);
  });

  it('deve redirecionar os usuários não autenticados quando tentam acessar a rota', () => {
    expect(guard.canActivateChild(routeMock, routeStateMock)).toEqual(false);
    expect(routerMock.navigate).toHaveBeenCalledWith(['/login']);
  });
 
  it('deve permitir acessar a rota', () => {
    loginService.autenticar(new Usuario({login: 'log', senha: 'se'}));
    expect(guard.canActivateChild(routeMock, routeStateMock)).toEqual(true);
  });

});