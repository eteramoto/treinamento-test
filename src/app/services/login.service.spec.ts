import { TestBed } from '@angular/core/testing';

import { LoginService, Usuario } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService]
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#autenticar com as propriedades da entidade nula. Deve retornar falso', () => {
    const usuario: Usuario = new Usuario({login: null, senha: null});
    expect(service.autenticar(usuario)).toBe(false);
    expect(service.autenticado()).toBe(false);
  });

  it('#autenticar com as propriedades da entidade com string vazia. Deve retornar falso', () => {
    const usuario: Usuario = new Usuario({login: '', senha: ''});
    expect(service.autenticar(usuario)).toBe(false);
    expect(service.autenticado()).toBe(false);
  });
  
  it('#autenticar a propriedade senha esta com a string vazia. Deve retornar falso', () => {
    const usuario: Usuario = new Usuario({login: 'com valor', senha: ''});
    expect(service.autenticar(usuario)).toBe(false);
    expect(service.autenticado()).toBe(false);
  });

  it('#autenticar a propriedade senha esta nula e o login esta com valor. Deve retornar falso', () => {
    const usuario: Usuario = new Usuario({login: 'com valor', senha: null});
    expect(service.autenticar(usuario)).toBe(false);
    expect(service.autenticado()).toBe(false);
  });

  it('#autenticar a propriedade login esta com a string vazia. Deve retornar falso', () => {
    const usuario: Usuario = new Usuario({login: '', senha: 'com valor'});
    expect(service.autenticar(usuario)).toBe(false);
    expect(service.autenticado()).toBe(false);
  });

  it('#autenticar a propriedade login esta nula e a senha com valor. Deve retornar falso', () => {
    const usuario: Usuario = new Usuario({login: null, senha: 'com valor'});
    expect(service.autenticar(usuario)).toBe(false);
    expect(service.autenticado()).toBe(false);
  });

  it('#autenticar login e senha preenchido. Deve retornar true', () => {
    const usuario: Usuario = new Usuario({login: 'log1', senha: 'se1'});
    expect(service.autenticar(usuario)).toBe(true);
    expect(service.autenticado()).toBe(true);
  });

  it('#sair deve ser chamado', () => {
    let spy = spyOn(service, 'sair');
    service.sair();
    expect(service.sair).toHaveBeenCalled();
  });

});
