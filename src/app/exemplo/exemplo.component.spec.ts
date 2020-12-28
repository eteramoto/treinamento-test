import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { UiModule } from '../ui/ui.module';

import { ExemploComponent } from './exemplo.component';

describe('ExemploComponent', () => {
  let component: ExemploComponent;
  let fixture: ComponentFixture<ExemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploComponent ],
      imports: [FormsModule, UiModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("#somar vou passar dois valores que devem ser somados", () => {

    let resultado = component.somar(1,2);
    expect(resultado).toBe(3);

  });

  it("#somar a soma de -1 mais -2, deve retornar o valor -3", () => {
    let resultado = component.somar(-1,-2);
    expect(resultado).toBe(-3);
  });

  it("#positivo, deve verificar se a soma retornou um valor positivo", () => {
    let resultado = component.somar(1,2);
    let positivo = component.positivo(resultado);
    expect(positivo).toBeTrue();
  });

  it("#positivo, deve verificar se a soma retornou um valor negativo", () => {
    let resultado = component.somar(-1,-2);
    let positivo = component.positivo(resultado);
    expect(positivo).toBeFalse();
  });

  it("validar se o campo é atualizado com valor positivo ao preencher os dois inputs", () => {
    let inputCampo1 : HTMLInputElement =  fixture.debugElement.query(By.css('input[name=campo1]')).nativeElement;
    inputCampo1.value = '1';
    inputCampo1.dispatchEvent(new Event('input'));

    let inputCampo2 : HTMLInputElement =  fixture.debugElement.query(By.css('input[name=campo2]')).nativeElement;
    inputCampo2.value = '1';
    inputCampo2.dispatchEvent(new Event('input'));

    const button : HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();

    let label : HTMLLabelElement =  fixture.debugElement.query(By.css('label')).nativeElement;
    fixture.detectChanges();

    expect(label.innerHTML).toBe('2');

  });


});
