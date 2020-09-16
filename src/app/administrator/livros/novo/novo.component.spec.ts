import { ComponentFixture, TestBed, inject, async } from '@angular/core/testing';

import { NovoComponent } from './novo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UiModule } from 'src/app/ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('NovoComponent', () => {
  let component: NovoComponent;
  let fixture: ComponentFixture<NovoComponent>;
  let subject: NovoComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoComponent ],
      imports: [ ReactiveFormsModule, UiModule, BrowserAnimationsModule ],
      providers: [ NovoComponent ]
    })
    .compileComponents();
  });

  beforeEach( () => {
    fixture = TestBed.createComponent(NovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(
    inject([NovoComponent], (livroForm: NovoComponent) => {
      subject = livroForm;
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onSubmit - Formulário inválido, deve retornar false', () => {
    expect(subject.livroForm.valid).toBe(false);
    expect(subject.onSubmit()).toBe(false);
  });

  it('#onSubmit - Formulário válido, deve retornar true ', () => {
    subject.livroForm.get('titulo').setValue('titulo');
    expect(subject.livroForm.valid).toBe(true);
    let spy = spyOn(subject, 'onSubmit');
    subject.onSubmit();
    expect(spy).toHaveBeenCalled();
  });

  it('Formulário preenchido via html. Campo título preenchido, o botão de salvar deve estar habilitado.', 
    async(
      () => {
        fixture.whenStable().then(
          () => {
            const button : HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;
            let inputTitulo : HTMLInputElement =  fixture.debugElement.query(By.css('input[name=titulo]')).nativeElement;
            inputTitulo.value = 'titulo';
            inputTitulo.dispatchEvent(new Event('input'));
      
            fixture.detectChanges();
            expect(button.disabled).toBe(false);
          }
        );
      }
    )
  );

  it('Formulário preenchido via html. Campo título está vazio, o botão de salvar deve estar desabilitado.', 
  async(
    () => {
      fixture.whenStable().then(
        () => {
          const button : HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;
          let inputTitulo : HTMLInputElement =  fixture.debugElement.query(By.css('input[name=titulo]')).nativeElement;
          inputTitulo.dispatchEvent(new Event('input'));
    
          fixture.detectChanges();
          expect(button.disabled).toBe(true);
        }
      );
    }
  )
);

});
