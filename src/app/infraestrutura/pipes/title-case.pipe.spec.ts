import { TitleCasePipe } from './title-case.pipe';

describe('TitleCasePipe', () => {
  let pipe: TitleCasePipe;
  beforeEach(() => {
    pipe = new TitleCasePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Transforma o texto "hello" em "Hello"', () => {
    expect(pipe.transform('hello')).toBe('Hello');
  });

  it('Transforma o texto "hello world" em "Hello World"', () => {
    expect(pipe.transform('hello world')).toBe('Hello World');
  });

  it('Deve retornar vazio caso envie a string ""', () => {
    expect(pipe.transform('')).toBe('');
  });

});
