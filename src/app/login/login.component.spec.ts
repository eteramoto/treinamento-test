import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { LoginService } from '../services/login.service';
import { UiModule } from '../ui/ui.module';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerMock = {navigate: jasmine.createSpy('navigate')};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        FormsModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        UiModule,
      ],
      providers: [
        LoginService,
        { provide: Router, useValue: routerMock },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.logIn();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#login usuario e senha não preenchido, deve ficar na página', () => {
    component.loginValue = '';
    component.senhaValue = '';
    let spy = spyOn(component, 'logIn');
    component.logIn();
    expect(spy).toHaveBeenCalled();
  }); 

  it('#login usuario e senha preenchido, deve redirecionar para página dashboard', () => {
    component.loginValue = 'usuario';
    component.senhaValue = 'senha';
    component.logIn();
    expect(routerMock.navigate).toHaveBeenCalledWith(['/admin']);
  }); 

  it('#app-login com os campos preenchidos, formulario é válido e o botão login fica habilitado', 
    async(
      () => {
        fixture.whenStable().then(
          () => {
            const button : HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;
            let inputUsuario : HTMLInputElement =  fixture.debugElement.query(By.css('input[name=usuario]')).nativeElement;
            inputUsuario.value = 'a';
            inputUsuario.dispatchEvent(new Event('input'));
            let inputSenha : HTMLInputElement =  fixture.debugElement.query(By.css('input[name=senha]')).nativeElement;
            inputSenha.value = 'a';
            inputSenha.dispatchEvent(new Event('input'));
      
            fixture.detectChanges();
            expect(button.disabled).toBe(false);
          }
        );
      }
    )
  );

  it('#app-login sem os campos preenchidos, formulario é inválido e o botão login fica desabilitado', 
    async(
      () => {
        fixture.whenStable().then(
          () => {
            fixture.detectChanges();
            const button : HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;
            expect(button.disabled).toBe(true);
          }
        );
      }
    )
  );

  it('#app-login validacao do campo requerido usuario deve ficar requerido.', 
    async(
      () => {
        fixture.whenStable().then(
          () => {
            let inputUsuario : HTMLInputElement =  fixture.debugElement.query(By.css('input[name=usuario]')).nativeElement;
            inputUsuario.dispatchEvent(new Event('input'));

            fixture.detectChanges();
            expect(inputUsuario.required).toBe(true);
          }
        );
      }
    )
  );

  it('#app-login validacao do campo usuario preenchido. deve estar válido.', 
    async(
      () => {
        fixture.whenStable().then(
          () => {
            let inputUsuario : HTMLInputElement =  fixture.debugElement.query(By.css('input[name=usuario]')).nativeElement;
            inputUsuario.value = 'login';
            inputUsuario.dispatchEvent(new Event('input'));

            fixture.detectChanges();
            expect(inputUsuario.validity.valid).toBe(true);
          }
        );
      }
    )
  );


  it('#app-login validacao do campo usuario preenchido. deve estar inválido.', 
    async(
      () => {
        fixture.whenStable().then(
          () => {
            let inputUsuario : HTMLInputElement =  fixture.debugElement.query(By.css('input[name=usuario]')).nativeElement;
            inputUsuario.dispatchEvent(new Event('input'));

            fixture.detectChanges();
            expect(inputUsuario.validity.valid).toBe(false);
          }
        );
      }
    )
  );

});
