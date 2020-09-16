import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { isEmpty } from "lodash";

export interface IUsuario {
  login?: string;
  senha?: string;
}

export class Usuario implements IUsuario {
  login: string;
  senha: string;

  constructor(_objeto: IUsuario) {
    Object.assign(this, _objeto);
  }
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLoggedIn = false;
  public redirectUrl: string;
  constructor() { }

  autenticar(_usuario: Usuario): boolean {
    if (_usuario && !(isNullOrUndefined(_usuario.login) || isEmpty(_usuario.login)) && !(isNullOrUndefined(_usuario.senha) || isEmpty(_usuario.senha))) {
      this.isLoggedIn = true;
      return true;        
    }
    return false;
  }

  autenticado() {
    return this.isLoggedIn;
  }

  sair(): void {
    this.isLoggedIn = false;
  }
}