import { Component, ViewChild } from '@angular/core';
import { LoginService, Usuario } from '../services/login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginValue = '';
  senhaValue = '';
  showSpinner: boolean = false;
  
  constructor(
    private _login$: LoginService, 
    private router: Router
  ) { }

  @ViewChild('form', {static: true} ) public formulario: NgForm;

  logIn(): void {
    const usuario: Usuario = new Usuario({
      login: this.loginValue,
      senha: this.senhaValue 
    });
    this.showSpinner = true;
    if (this._login$.autenticar(usuario)) {
      this.showSpinner = false;
      const redirect = '/admin';
      this.router.navigate([redirect]);
    } else {
      this.showSpinner = false;
    }
  }
}