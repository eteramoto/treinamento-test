import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    // cria dinamicamente o componente que 
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    // instancia o componente e adiciona na DOM
    const fixture = TestBed.createComponent(AppComponent);
    // acessa a instancia do componente
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'treinamento-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // através da instancia do componente, pode-se acessar as propriedades e funções
    expect(app.title).toEqual('treinamento-test');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    // a partir do elemento html do componente, podemos procurar os elementos html e obter suas propriedades.
    expect(compiled.querySelector('.content span').textContent).toContain('treinamento-test app is running!');
  });
});
